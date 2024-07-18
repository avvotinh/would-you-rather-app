import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { saveQuestion } from "../../utils/api";
import { addQuestionToUser } from "../users/usersSlice";

const initialState = {};

const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    receiveQuestions(state, action) {
      return { ...state, ...action.payload };
    },
    addAnswerToQuestion(state, action) {
      const { authUser, qid, answer } = action.payload;
      return {
        ...state,
        [qid]: {
          ...state[qid],
          [answer]: {
            ...state[qid][answer],
            votes: state[qid][answer].votes.concat(authUser),
          },
        },
      };
    },
  },
  extraReducers(builder) {
    builder.addCase(handleAddQuestion.fulfilled, (state, action) => {
      state[action.payload.question.id] = action.payload.question;
    });
  },
});

export const handleAddQuestion = createAsyncThunk(
  "questions/handleAddQuestion",
  async (question, { dispatch, getState }) => {
    const { authedUser } = getState().authUser; // Lấy authedUser từ store
    const newQuestion = await saveQuestion(question);
    dispatch(
      addQuestionToUser({ userId: authedUser, questionId: newQuestion.id })
    );
    return { question: newQuestion };
  }
);

export const { receiveQuestions, addAnswerToQuestion } = questionsSlice.actions;

export default questionsSlice.reducer;
