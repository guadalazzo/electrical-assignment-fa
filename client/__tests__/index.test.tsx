/**
 * @jest-environment jsdom
 */
import { render, screen, fireEvent } from "@testing-library/react";
import Home from "../src/app/page";

describe("Home", () => {
  it("renders ", () => {
    render(<Home />);
    const heading = screen.getByRole("heading", {
      name: "Select your connector type...",
    });
    expect(heading).toBeInTheDocument();

    const selectorCCS = screen.getByRole("button", {
      name: "CCS CCS connector",
    });
    expect(selectorCCS).toBeInTheDocument();
    fireEvent.click(selectorCCS);

    const buttonElement = screen.getByTestId("button-CCS-selected");

    expect(buttonElement).toBeInTheDocument();

    const selectorCHADE = screen.getByRole("button", {
      name: "CHAdeMO CHAdeMO connector",
    });
    expect(selectorCHADE).toBeInTheDocument();

    const selectorAC = screen.getByRole("button", {
      name: "AC AC connector",
    });
    expect(selectorAC).toBeInTheDocument();

    const mainButton = screen.getByRole("button", {
      name: "Start your session",
    });
    expect(mainButton).toBeInTheDocument();
  });
});
