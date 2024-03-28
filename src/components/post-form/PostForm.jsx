/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import appwriteService from "../../appwrite/config";

const PostForm = ({ post }) => {
  const { register, handleSubmit, watch, setValue, control } = useForm({
    defaultValues: {
      title: post?.title || "",
      slug: post?.slug || "",
      content: post?.content || "",
      status: post?.status || "active",
    },
  });

  const navigate = useNavigate();
  const userData = useSelector((state) => state.user.userData);

  const submit = async (data) => {
    if (post) {
      const file = data.image[0]
        ? appwriteService.uploadFiles(data.image[0])
        : null;
      if (file) {
        appwriteService.deleteFile(post.featuredImage);
      }
      const dbPost = await appwriteService.updatePost(dbPost.$id, {
        ...data,
        featuredImage: file ? file.$id : undefined,
      });
      if (dbPost) {
        navigate(`/post/${dbPost.$id}}`);
      }
    }
  };
  return <div>PostForm</div>;
};

export default PostForm;
