import { render, fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom'
import Counter from '../components/Counter';
// import necessary react testing library helpers here
// import the Counter component here

//import { render } from "react-dom";

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  const expectedVal = screen.getByText(/Counter/i);;
  expect(expectedVal).toBeInTheDocument();
  // Complete the unit test below based on the objective in the line above
});

test('should render initial count with value of 0', () => {
  const expectedVal = screen.getByText(/0/i);
  expect(screen.getByTestId('count')).toBe(expectedVal);
  // Complete the unit test below based on the objective in the line above
});

test('clicking + increments the count', () => {
  fireEvent.click(screen.getByText('+'));
  var expectedVal = screen.getByText(/1/i);
  expect(screen.getByTestId('count')).toBe(expectedVal);
  // Complete the unit test below based on the objective in the line above
});

test('clicking - decrements the count', () => {
  fireEvent.click(screen.getByText('-'));
  var expectedVal = screen.getByText(/-1/i);
  expect(screen.getByTestId('count')).toBe(expectedVal);
  // Complete the unit test below based on the objective in the line above
});
