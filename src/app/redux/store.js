const { configureStore } = require("@reduxjs/toolkit");
import usersReducer from "./slice";
import todoReducer from "./todoslice"
export const store = configureStore({
  reducer: {
    userData: usersReducer,
    todoData: todoReducer
  }
});
