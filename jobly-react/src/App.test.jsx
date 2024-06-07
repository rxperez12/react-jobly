import { describe, test, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";

import App from "./App.jsx";

test("matches snapshot", function () {
  const { container } = render(<App />);
  expect(container).toMatchSnapshot();
});
