import React from "react";
import { render, screen } from "@testing-library/react";
import QuestionItem from "./QuestionItem";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { BrowserRouter } from "react-router-dom";

describe("QuestionItem Component", () => {
  const mockQuestion = {
    id: "8xf0y6ziyjabvozdd253nd",
    author: "userTest",
    optionOne: {
      text: "Build our new application using React",
      votes: ["userTest"],
    },
    optionTwo: {
      text: "Build our new application using Vue.js",
      votes: [],
    },
  };

  const renderComponent = () =>
    render(
      <Provider store={store}>
        <BrowserRouter>
          <QuestionItem question={mockQuestion} />
        </BrowserRouter>
      </Provider>
    );

  let store;

  beforeAll(() => {
    const mockUsers = {
      userTest: {
        id: "userTest",
        name: "User Test",
        avatarURL: "avatar.jpg",
      },
    };

    const mockStore = configureStore([]);
    store = mockStore({ users: mockUsers });
  });

  it("matches the snapshot of the rendered QuestionItem component", () => {
    const { asFragment } = renderComponent();
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the QuestionItem component with correct content", () => {
    renderComponent();
    expect(screen.getByText("User Test ask:")).toBeInTheDocument();
    expect(
      screen.getByText("Build our new application using React...?")
    ).toBeInTheDocument();
    const link = screen.getByRole("link", { name: "View Poll" });
    expect(link).toHaveAttribute("href", "/questions/8xf0y6ziyjabvozdd253nd");
  });
});
