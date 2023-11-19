/**
 * @jest-environment jsdom
 */
import { render } from "@testing-library/react";

import Home from "../src/app/page";
import Leaderboard from "../src/app/leaderboard/page";

it("renders homepage unchanged", () => {
  const { container } = render(<Home />);
  expect(container).toMatchSnapshot();
});

it("renders Leaderboard unchanged", () => {
  const { container } = render(<Leaderboard />);
  expect(container).toMatchSnapshot();
});
