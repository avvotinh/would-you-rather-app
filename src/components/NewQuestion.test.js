import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { Provider, useDispatch } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import NewQuestion from "./NewQuestion";
import { handleAddQuestion } from "../features/question/questionsSlice";
jest.mock("../features/question/questionsSlice", () => ({
  handleAddQuestion: jest.fn(),
}));

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: jest.fn(),
}));

describe("NewQuestion Component", () => {
  let mockDispatch;
  let store;

  const renderComponent = () =>
    render(
      <Provider store={store}>
        <MemoryRouter>
          <NewQuestion />
        </MemoryRouter>
      </Provider>
    );

  beforeAll(() => {
    const mockStore = configureStore();

    const initialState = {
      authedUser: "testUser",
      users: {
        testUser: {
          id: "testUser",
          name: "Test User",
          avatarURL: "testAvatar.png",
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

  it("matches the snapshot of the rendered NewQuestion component", () => {
    const { asFragment } = renderComponent();
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the NewQuestion component with the correct initial content", () => {
    renderComponent();

    expect(screen.getByText("Would You Rather")).toBeInTheDocument();
    expect(screen.getByLabelText("Option One")).toHaveValue("");
    expect(screen.getByLabelText("Option Two")).toHaveValue("");
    expect(screen.getByText("Test User asks:")).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute("src", "testAvatar.png");
  });

  it("displays an error message if form is submitted without filling in both options", () => {
    renderComponent();

    fireEvent.click(screen.getByRole("button", { name: "Submit" }));

    expect(
      screen.getByText("Please fill in both options.")
    ).toBeInTheDocument();
  });

  it("dispatches handleAddQuestion and resets form when submitted with valid options", async () => {
    renderComponent();

    fireEvent.change(screen.getByLabelText("Option One"), {
      target: { value: "Option One Text" },
    });
    fireEvent.change(screen.getByLabelText("Option Two"), {
      target: { value: "Option Two Text" },
    });

    fireEvent.click(screen.getByRole("button", { name: "Submit" }));

    await waitFor(() => {
      expect(handleAddQuestion).toHaveBeenCalledWith({
        optionOneText: "Option One Text",
        optionTwoText: "Option Two Text",
        author: "testUser",
      });
    });

    expect(mockDispatch).toHaveBeenCalled();
    expect(screen.getByLabelText("Option One")).toHaveValue("");
    expect(screen.getByLabelText("Option Two")).toHaveValue("");
  });
});
