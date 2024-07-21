import { _saveQuestion, _saveQuestionAnswer } from "./_DATA";

describe("API test", () => {
  describe("_saveQuestion", () => {
    it("should return the saved question with all expected fields populated when correctly formatted data is passed", async () => {
      const question = {
        optionOneText: "Option One",
        optionTwoText: "Option Two",
        author: "sarahedo",
      };

      const savedQuestion = await _saveQuestion(question);

      expect(savedQuestion).toBeDefined();
      expect(savedQuestion.optionOne).toEqual({
        votes: [],
        text: question.optionOneText,
      });
      expect(savedQuestion.optionTwo).toEqual({
        votes: [],
        text: question.optionTwoText,
      });
      expect(savedQuestion.author).toBe(question.author);
      expect(savedQuestion.timestamp).toBeGreaterThan(0);
      expect(savedQuestion.id).toBeDefined();
    });

    it("should return an error if incorrect data is passed", async () => {
      const invalidQuestion = {
        optionOneText: "Option One",
        author: "sarahedo",
      };

      await expect(_saveQuestion(invalidQuestion)).rejects.toEqual(
        "Please provide optionOneText, optionTwoText, and author"
      );
    });
  });

  describe("_saveQuestionAnswer", () => {
    it("should return true when correctly formatted data is passed", async () => {
      const authedUser = "sarahedo";
      const qid = "8xf0y6ziyjabvozdd253nd";
      const answer = "optionOne";

      const result = await _saveQuestionAnswer({ authedUser, qid, answer });

      expect(result).toBe(true);
    });

    it("should return an error if incorrect data is passed", async () => {
      const authedUser = "sarahedo";
      const qid = "8xf0y6ziyjabvozdd253nd";

      await expect(_saveQuestionAnswer({ authedUser, qid })).rejects.toEqual(
        "Please provide authedUser, qid, and answer"
      );
    });
  });
});
