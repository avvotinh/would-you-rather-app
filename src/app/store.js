import { configureStore } from "@reduxjs/toolkit";
import authedUserReducer from "../features/authedUser/authedUserSlice";
import questionsReducer from "../features/question/questionsSlice";
import usersReducer from "../features/users/usersSlice";
import loadingSlice from "./loadingSlice";

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
    authedUser: authedUserReducer,
    questions: questionsReducer,
    users: usersReducer,
    loading: loadingSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
