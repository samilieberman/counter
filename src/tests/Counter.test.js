// import necessary react testing library helpers here
// import the Counter component here
import { render, screen } from '@testing-library/react';
import Counter from '../components/Counter';
import userEvent from "@testing-library/user-event";


beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  render(<Counter />);
  const counterMessage = screen.getAllByText('Counter')[0];
  expect(counterMessage).toBeInTheDocument();

});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  render(<Counter />);
  const initialValue = screen.getAllByTestId('count')[0];
  expect(initialValue.textContent).toBe('0');
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  render(<Counter />);
  const value = screen.getAllByTestId('count')[0];
  userEvent.click(screen.getAllByRole('button',{name: '+'})[0]);
  expect(value.textContent).toBe("1");
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  render(<Counter />);
  const value = screen.getAllByTestId('count')[0];
  userEvent.click(screen.getAllByRole('button',{name: '-'})[0]);
  expect(value.textContent).toBe("-1");
});
