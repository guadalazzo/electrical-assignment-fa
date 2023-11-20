/**
 * @jest-environment jsdom
 */
// @ts-nocheck
import { render, screen, fireEvent } from "@testing-library/react";
import Home from "../src/app/page";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import ConnectorSelector from "../src/app/components/connector-selector";

const mockStore = configureStore([]);

describe("Home", () => {
  it("renders select button when clicking on CCS Connector", () => {
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

  it("Show error message when nothing is selected", () => {
    const store = mockStore({
      connectors: {
        connectorsList: [
          { name: "CCS", image: "ccs", selected: false },
          { name: "CHAdeMO", image: "chademo", selected: false },
          { name: "AC", image: "ac", selected: false },
        ],
      },
    });

    render(
      <Provider store={store}>
        <ConnectorSelector />
      </Provider>
    );

    expect(
      screen.queryByText("Please select an option to continue")
    ).toBeNull();

    fireEvent.submit(
      screen.getByRole("button", { name: "Start your session" })
    );

    expect(
      screen.getByText("Please select an option to continue")
    ).toBeInTheDocument();
  });
});
