// import necessary react testing library helpers here
// import the Counter component here
import { render, fireEvent, screen } from '@testing-library/react';
import Counter from '../components/App';

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const counterTitle = screen.getByText(/Counter/i);
  expect(counterTitle).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  
  const countValue = screen.getByTestId("count");
  expect(countValue.textContent).toBe("0");
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const countValue = screen.getByTestId("count");
  const increment = screen.getByRole('button', { name: '+' });
  expect(countValue.textContent).toBe("0");
  fireEvent.click(increment);
  expect(countValue.textContent).toBe("1");
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const countValue = screen.getByTestId("count");
  const decrement = screen.getByRole('button', { name: '-' });
  expect(countValue.textContent).toBe("0");
  fireEvent.click(decrement);
  expect(countValue.textContent).toBe("-1");
});
