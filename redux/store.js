import { configureStore } from "@reduxjs/toolkit";
import { authReducer, taskReducer } from "./reducers/reducer";

const store = configureStore({
  reducer: {
    auth: authReducer,
    task: taskReducer,
  },
});

export default store;
