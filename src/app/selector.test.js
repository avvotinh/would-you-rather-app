import {
  getQuestions,
  isAnsweredQuestion,
  getAuthedUserInfo,
} from "./selector";

describe("Redux Selectors", () => {
  const initialState = {
    authedUser: "user1",
    users: {
      user1: {
        id: "user1",
        name: "User One",
        avatarURL: "avatar1.png",
        answers: {
          qid1: "optionOne",
        },
      },
      user2: {
        id: "user2",
        name: "User Two",
        avatarURL: "avatar2.png",
        answers: {},
      },
    },
    questions: {
      qid1: {
        id: "qid1",
        optionOne: { text: "Option 1", votes: [] },
        optionTwo: { text: "Option 2", votes: [] },
        timestamp: 1625241234000,
      },
      qid2: {
        id: "qid2",
        optionOne: { text: "Option A", votes: [] },
        optionTwo: { text: "Option B", votes: [] },
        timestamp: 1625241235000,
      },
    },
  };

  describe("getQuestions", () => {
    it("should return unanswered questions when type is UNANSWERED", () => {
      const result = getQuestions(initialState, "UNANSWERED");
      expect(result).toEqual([initialState.questions.qid2]);
    });

    it("should return answered questions when type is ANSWERED", () => {
      const result = getQuestions(initialState, "ANSWERED");
      expect(result).toEqual([initialState.questions.qid1]);
    });
  });

  describe("isAnsweredQuestion", () => {
    it("should return true if the question is answered by the user", () => {
      const result = isAnsweredQuestion(initialState, "qid1");
      expect(result).toBe(true);
    });

    it("should return false if the question is not answered by the user", () => {
      const result = isAnsweredQuestion(initialState, "qid2");
      expect(result).toBe(false);
    });
  });

  describe("getAuthedUserInfo", () => {
    it("should return the information of the authenticated user", () => {
      const result = getAuthedUserInfo(initialState);
      expect(result).toEqual(initialState.users.user1);
    });
  });
});
