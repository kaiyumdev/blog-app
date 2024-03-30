import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container } from "../components";
import PostCard from "../components/PostCard";

const AllPosts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    appwriteService.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);
  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id}>
              <PostCard post={post}></PostCard>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default AllPosts;
