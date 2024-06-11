import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    allPosts: (state, action) => {
      state.posts = action.payload;
    },
    addPost: (state, action) => {
      state.posts.push(action.payload.post);
    },
    removePost: (state, action) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
    },
    updatePost: (state, action) => {
      const updatedPostIndex = state.posts.findIndex(
        (post) => post.$id === action.payload
      );
      if (updatedPostIndex !== -1) {
        state.posts[updatedPostIndex] = action.payload;
      }
    },
  },
});

export const { setPosts, addPost } = postSlice.actions;

export default postSlice.reducer;
