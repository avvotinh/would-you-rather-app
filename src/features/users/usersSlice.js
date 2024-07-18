import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { saveQuestionAnswer } from "../../utils/api";
import { addAnswerToQuestion } from "../question/questionsSlice";

const initialState = {};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    receiveUsers(state, action) {
      return { ...state, ...action.payload };
    },
    addAnswerToUser(state, action) {
      const { authUser, qid, answer } = action.payload;
      state[authUser].answers[qid] = answer;
    },
    addQuestionToUser(state, action) {
      const { userId, questionId } = action.payload;
      state[userId].questions.concat(questionId);
    },
  },
  extraReducers(builder) {
    builder.addCase(handleSaveQuestionAnswer.fulfilled, (state, action) => {
      const { authUser, qid, answer } = action.payload;
      state[authUser].answers[qid] = answer;
    });
  },
});

export const handleSaveQuestionAnswer = createAsyncThunk(
  "users/handleSaveQuestionAnswer",
  async ({ authUser, qid, answer }, { dispatch }) => {
    await saveQuestionAnswer({ authUser, qid, answer });
    dispatch(addAnswerToQuestion({ authUser, qid, answer }));
    return { authUser, qid, answer };
  }
);

export const { receiveUsers, addQuestionToUser } = usersSlice.actions;

export default usersSlice.reducer;
