import { fireEvent, render, screen } from '@testing-library/react';
import Counter from '../components/Counter';

beforeEach(() => {
  // Render the Counter component here
})

test('renders counter message', () => {
  render(<Counter />);
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  render(<Counter />);
  const counterMessage = screen.getByText(/0/i);
  expect(counterMessage).toBeInTheDocument();
});

test('clicking + increments the count', () => {
  render(<Counter />);
  const incrementButton = screen.getByRole('button', {
    name: /increment/i
  });
  const decrementButton = screen.getByRole('button', {
    name: /decrement/i
  });
  fireEvent.click(incrementButton);
  const counterMessage = screen.getByText(/1/i);
  expect(counterMessage).toBeInTheDocument();

  fireEvent.click(decrementButton);
});

test('clicking - decrements the count', () => {
  render(<Counter />);
  const decrementButton = screen.getByRole('button', {
    name: /decrement/i
  });
  fireEvent.click(decrementButton);
  const counterMessage = screen.getByText(/-1/i);
  expect(counterMessage).toBeInTheDocument();
});
