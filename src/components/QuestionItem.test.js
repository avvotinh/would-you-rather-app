import React from "react";
import { render, screen } from "@testing-library/react";
import QuestionItem from "./QuestionItem";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { BrowserRouter } from "react-router-dom";

describe("QuestionItem Component", () => {
  const mockQuestion = {
    id: "8xf0y6ziyjabvozdd253nd",
    author: "sarahedo",
    optionOne: {
      text: "Build our new application using React",
      votes: ["sarahedo"],
    },
    optionTwo: {
      text: "Build our new application using Vue.js",
      votes: [],
    },
  };

  let store;

  beforeAll(() => {
    const mockUsers = {
      sarahedo: {
        id: "sarahedo",
        name: "Sarah Edo",
        avatarURL: "https://example.com/avatar.jpg",
      },
    };

    const mockStore = configureStore([]);
    store = mockStore({ users: mockUsers });
  });

  it("renders correctly", () => {
    const { asFragment } = render(
      <Provider store={store}>
        <BrowserRouter>
          <QuestionItem question={mockQuestion} />
        </BrowserRouter>
      </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("displays the author name and avatar", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <QuestionItem question={mockQuestion} />
        </BrowserRouter>
      </Provider>
    );
    expect(screen.getByText("Sarah Edo ask:")).toBeInTheDocument();
  });

  it("displays the first option text", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <QuestionItem question={mockQuestion} />
        </BrowserRouter>
      </Provider>
    );
    expect(
      screen.getByText("Build our new application using React...?")
    ).toBeInTheDocument();
  });

  it("links to the question details page", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <QuestionItem question={mockQuestion} />
        </BrowserRouter>
      </Provider>
    );
    const link = screen.getByRole("link", { name: "View Poll" });
    expect(link).toHaveAttribute("href", "/questions/8xf0y6ziyjabvozdd253nd");
  });
});
