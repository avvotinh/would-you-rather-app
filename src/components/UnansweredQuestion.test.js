import { render, screen, fireEvent } from "@testing-library/react";
import { Provider, useDispatch } from "react-redux";
import configureStore from "redux-mock-store";
import { BrowserRouter } from "react-router-dom";
import UnansweredQuestion from "./UnansweredQuestion";
import { handleSaveQuestionAnswer } from "../features/users/usersSlice";

jest.mock("../features/users/usersSlice", () => ({
  handleSaveQuestionAnswer: jest.fn(),
}));

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: jest.fn(),
}));

describe("UnansweredQuestion Component", () => {
  let mockDispatch;
  let store;

  beforeAll(() => {
    const mockStore = configureStore();

    const initialState = {
      users: {
        testUser: {
          id: "testUser",
          name: "Test User",
          avatarURL: "avatar.png",
        },
      },
      questions: {
        "8xf0y6ziyjabvozdd253nd": {
          id: "8xf0y6ziyjabvozdd253nd",
          author: "testUser",
          optionOne: {
            text: "Option One",
          },
          optionTwo: {
            text: "Option Two",
          },
        },
      },
    };
    store = mockStore(initialState);
  });

  beforeEach(() => {
    jest.clearAllMocks();
    mockDispatch = jest.fn();
    useDispatch.mockReturnValue(mockDispatch);
  });

  const renderComponent = (qid) =>
    render(
      <Provider store={store}>
        <BrowserRouter>
          <UnansweredQuestion qid={qid} />
        </BrowserRouter>
      </Provider>
    );

  it("matches the snapshot of the rendered UnansweredQuestion component", () => {
    const { asFragment } = renderComponent("8xf0y6ziyjabvozdd253nd");
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the component with correct content", () => {
    renderComponent("8xf0y6ziyjabvozdd253nd");

    expect(screen.getByText("Test User asks:")).toBeInTheDocument();
    expect(screen.getByLabelText("Option One")).toBeInTheDocument();
    expect(screen.getByLabelText("Option Two")).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute("src", "avatar.png");
  });

  it("handles radio button selection correctly", () => {
    renderComponent("8xf0y6ziyjabvozdd253nd");

    fireEvent.click(screen.getByLabelText("Option Two"));
    expect(screen.getByLabelText("Option Two")).toBeChecked();
    expect(screen.getByLabelText("Option One")).not.toBeChecked();
  });

  it("dispatches action with selected option on form submit", () => {
    const qid = "8xf0y6ziyjabvozdd253nd";
    renderComponent(qid);

    fireEvent.click(screen.getByLabelText("Option Two"));
    fireEvent.click(screen.getByRole("button", { name: "Submit" }));

    expect(handleSaveQuestionAnswer).toHaveBeenCalledWith({
      qid,
      answer: "optionTwo",
    });
    expect(handleSaveQuestionAnswer).toHaveBeenCalledTimes(1);
  });
});
