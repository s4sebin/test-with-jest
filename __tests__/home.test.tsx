import React from "react";
import Home from "../pages/index";
import { fireEvent, render, screen } from "@testing-library/react";
describe("Home", () => {
  it("renders the home component", () => {
    render(<Home />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("Welcome to the Home screen");

    const link = screen.getByRole("link");
    expect(link).toBeInTheDocument();
    expect(link).toHaveTextContent("Go to Calculator");

    fireEvent.click(link);
    // check the page is navigated or not
  });
});
