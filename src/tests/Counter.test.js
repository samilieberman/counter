import { render, screen, fireEvent  } from '@testing-library/react';
import Counter from '../components/Counter';

beforeEach(() => {
  render(<Counter />);
})

test('renders counter message', () => {
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  const initialCnt = screen.getByText(/0/i);
  expect(initialCnt).toBeInTheDocument();
});

test('clicking + increments the count', () => {
  const countValue = screen.getByTestId("count");
  const increment = screen.getByText("+");

  expect(countValue.textContent).toBe("0");
  fireEvent.click(increment);
  expect(countValue.textContent).toBe("1");
});

test('clicking - decrements the count', () => {
  const countValue = screen.getByTestId("count");
  const increment = screen.getByText("-");

  expect(countValue.textContent).toBe("0");
  fireEvent.click(increment);
  expect(countValue.textContent).toBe("-1");
});
