// import { configureStore } from "@reduxjs/toolkit";
// import authSlice from "./authSlice";

// const store = configureStore({
//   reducer: {
//     auth: authSlice,
//   },
// });

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import postSlice from "./postSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    post: postSlice,
  },
});

export default store;
