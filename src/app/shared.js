import { getInitialData } from "../utils/api";
import { receiveQuestions } from "../features/question/questionsSlice";
import { receiveUsers } from "../features/users/usersSlice";

export function handleInitialData() {
  return async (dispatch) => {
    const { users, questions } = await getInitialData();
    dispatch(receiveUsers(users));
    dispatch(receiveQuestions(questions));
  };
}
