import { render, fireEvent, screen } from "@testing-library/react";
import Counter from "../components/Counter";

beforeEach(() => {
  render(<Counter />);
});

test("renders counter message", () => {
  const headerText = screen.queryByText("Counter");
  const count = screen.queryByTestId("count");
  const incrementButton = screen.queryByTestId("incrementCountButton");
  const decrementButton = screen.queryByTestId("decrementCountButton");

  expect(headerText).not.toBeNull();
  expect(count).not.toBeNull();
  expect(incrementButton).not.toBeNull();
  expect(decrementButton).not.toBeNull();
});

test("should render initial count with value of 0", () => {
  const count = screen.queryByTestId("count");

  expect(count).toHaveTextContent("0");
});

test("clicking + increments the count", () => {
  const count = screen.queryByTestId("count");
  const incrementButton = screen.queryByTestId("incrementCountButton");

  fireEvent.click(incrementButton);
  expect(count).toHaveTextContent("1");
});

test("clicking - decrements the count", () => {
  const count = screen.queryByTestId("count");
  const decrementButton = screen.queryByTestId("decrementCountButton");

  fireEvent.click(decrementButton);
  expect(count).toHaveTextContent("-1");
});
