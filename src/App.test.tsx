import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders Heading", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/My Good Reads/);
  expect(linkElement).toBeInTheDocument();
});
