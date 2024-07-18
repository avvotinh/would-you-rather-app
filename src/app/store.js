import { configureStore } from "@reduxjs/toolkit";
import authUserReducer from "../features/authUser/authUserSlice";
import questionsReducer from "../features/question/questionsSlice";
import usersReducer from "../features/users/usersSlice";

const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.log("The action:", action);
  const returnValue = next(action);
  console.log("The new state: ", store.getState());
  console.groupEnd();
  return returnValue;
};

const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    questions: questionsReducer,
    users: usersReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
