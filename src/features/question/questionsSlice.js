import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { saveQuestion } from "../../utils/api";
import { addQuestionToUser } from "../users/usersSlice";
import { setIsLoading } from "../../app/loadingSlice";

const initialState = {};

const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    receiveQuestions(state, action) {
      return { ...state, ...action.payload };
    },
    addAnswerToQuestion(state, action) {
      const { authedUser, qid, answer } = action.payload;
      return {
        ...state,
        [qid]: {
          ...state[qid],
          [answer]: {
            ...state[qid][answer],
            votes: state[qid][answer].votes.concat(authedUser),
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
    dispatch(setIsLoading(true));
    const { authedUser } = getState();
    try {
      const newQuestion = await saveQuestion(question);
      dispatch(
        addQuestionToUser({ userId: authedUser, questionId: newQuestion.id })
      );
      return { question: newQuestion };
    } catch (error) {
      throw error;
    } finally {
      dispatch(setIsLoading(false));
    }
  }
);

export const { receiveQuestions, addAnswerToQuestion } = questionsSlice.actions;
export default questionsSlice.reducer;
