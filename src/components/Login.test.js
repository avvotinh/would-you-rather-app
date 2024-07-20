import React from "react";
import { render, screen } from "@testing-library/react";
import Login from "./Login";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../app/store";

describe("Login Component", () => {
  it("renders the login form", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </Provider>
    );
    expect(
      screen.getByText("Welcome to the Would You Rather App")
    ).toBeInTheDocument();
    expect(screen.getByText("Sign in")).toBeInTheDocument();
    expect(
      screen.getByRole("combobox", { name: "Select User" })
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Sign In" })).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { container } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });
});
