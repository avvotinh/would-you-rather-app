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
      const { authedUser, qid, answer } = action.payload;
      state[authedUser].answers[qid] = answer;
    },
    addQuestionToUser(state, action) {
      const { userId, questionId } = action.payload;
      state[userId].questions.push(questionId);
    },
  },
  extraReducers(builder) {
    builder.addCase(handleSaveQuestionAnswer.fulfilled, (state, action) => {
      const { authedUser, qid, answer } = action.payload;
      state[authedUser].answers[qid] = answer;
    });
  },
});

export const handleSaveQuestionAnswer = createAsyncThunk(
  "users/handleSaveQuestionAnswer",
  async ({ qid, answer }, { dispatch, getState }) => {
    const { authedUser } = getState();
    await saveQuestionAnswer({ authedUser, qid, answer });
    dispatch(addAnswerToQuestion({ authedUser, qid, answer }));
    return { authedUser, qid, answer };
  }
);

export const { receiveUsers, addQuestionToUser } = usersSlice.actions;

export default usersSlice.reducer;
