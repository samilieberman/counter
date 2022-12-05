// import necessary react testing library helpers here
import { render, fireEvent, screen } from '@testing-library/react';
// import the Counter component here
import Counter from '../components/Counter';

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const initialCount = screen.getByTestId('count');
  expect(initialCount).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  fireEvent.click(screen.getByText('+'));
  const count = screen.getByTestId('count');
  expect(count).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  fireEvent.click(screen.getByText('-'));
  const count = screen.getByTestId('count');
  expect(count).toHaveTextContent('-1');
});
