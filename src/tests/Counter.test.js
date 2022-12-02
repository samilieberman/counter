import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from '../components/Counter';

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  expect(screen.getByTestId(/count/i)).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const initial = screen.getByTestId(/count/i).innerHTML;
  userEvent.click(screen.getByRole('button', {name: '+'}));
  expect(screen.getByTestId(/count/i).innerHTML).toBe('' + (parseInt(initial) + 1));
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const initial = screen.getByTestId(/count/i).innerHTML;
  userEvent.click(screen.getByRole('button', {name: '-'}));
  expect(screen.getByTestId(/count/i).innerHTML).toBe('' + (parseInt(initial) - 1));
});
