import { createSlice } from "@reduxjs/toolkit";

const globalSlice = createSlice({
  name: "global",
  initialState: {
    currentTitle: 'Simple Blog'
  },
  reducers: {
    updateTitle: (state, action) => {
      const pageTitle = action.payload;
      if (pageTitle !== state.currentTitle) {
        state.currentTitle = `${pageTitle}`;
      }
    }
  }
});

const { reducer: globalReducer, actions} = globalSlice;

export const { updateTitle } = actions;
export default globalReducer;