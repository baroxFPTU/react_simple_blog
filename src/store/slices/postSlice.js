import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "post",
  initialState: [],
  reducers: {
    addPost: (state, action) => {
      state.push(action.payload);
    },
    updatePosts: (state, action) => {
      state = [...action.payload];
      return state;
    },
    clearAll: (state, action) => {
      state = [];
      return state;
    }
  }
});

const { reducer: postReducer, actions} = postSlice;

export const { addPost, updatePosts, clearAll } = actions;
export default postReducer;