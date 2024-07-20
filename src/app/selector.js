import { createSelector } from "@reduxjs/toolkit";

const authedUser = (state) => state.authedUser;
const users = (state) => state.users;
const questions = (state) => state.questions;
export const getQuestions = createSelector(
  [authedUser, users, questions, (state, type) => type],
  (authedUser, users, questions, type) => {
    const answeredIds = Object.keys(users[authedUser].answers);
    return Object.values(questions)
      .filter((question) => {
        if (type === "UNANSWERED") {
          return !answeredIds.includes(question.id);
        }

        return answeredIds.includes(question.id);
      })
      .sort((a, b) => b.timestamp - a.timestamp);
  }
);

export const isAnsweredQuestion = createSelector(
  [authedUser, users, (state, qid) => qid],
  (authedUser, users, qid) => {
    const autherUserAnsweres = users[authedUser].answers;
    return Object.keys(autherUserAnsweres).includes(qid);
  }
);

export const getAuthedUserInfo = createSelector(
  [authedUser, users],
  (authedUser, users) => {
    return users[authedUser];
  }
);
