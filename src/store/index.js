import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import globalReducer from "./slices/globalSlice";
import postReducer from "./slices/postSlice";

const rootReducer = {
  global: globalReducer, 
  post: postReducer,
  auth: authReducer
}

const store = configureStore({
  reducer: rootReducer
});

export default store;