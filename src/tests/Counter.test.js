// import necessary react testing library helpers here
// import the Counter component here
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from '../components/Counter';

beforeEach(() => {
  // Render the Counter component here
    render(<Counter />);
})

test('renders counter message', () => {
    const counterMessage = screen.getByText(/Counter/i);
    expect(counterMessage).toBeInTheDocument();
  // Complete the unit test below based on the objective in the line above
});

test('should render initial count with value of 0', () => {
    const initialCount = screen.getByTestId("count");
    expect(initialCount).toHaveTextContent("0");
  // Complete the unit test below based on the objective in the line above
});

test('clicking + increments the count', () => {
    userEvent.click(screen.getByText("+"));
    const currCount = screen.getByTestId("count");
    expect(currCount).toHaveTextContent("1");
  // Complete the unit test below based on the objective in the line above
});

test('clicking - decrements the count', () => {
    userEvent.click(screen.getByText("-"));
    const currCount = screen.getByTestId("count");
    expect(currCount).toHaveTextContent("-1");
  // Complete the unit test below based on the objective in the line above
});
