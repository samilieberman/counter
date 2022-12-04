import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "../components/Counter";

beforeEach(() => {
  render(<Counter />);
});

test("renders counter message", () => {
  const expectedVal = screen.getByText(/Counter/i);
  expect(expectedVal).toBeInTheDocument();
});

test("should render initial count with value of 0", () => {
  const expectedVal = screen.getByText(/0/i);
  expect(screen.getByTestId("count")).toBe(expectedVal);
});

test("clicking + increments the count", () => {
  fireEvent.click(screen.getByText("+"));
  var expectedVal = screen.getByText(/1/i);
  expect(screen.getByTestId("count")).toBe(expectedVal);
});

test("clicking - decrements the count", () => {
  fireEvent.click(screen.getByText("-"));
  var expectedVal = screen.getByText(/-1/i);
  expect(screen.getByTestId("count")).toBe(expectedVal);
});
