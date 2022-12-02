import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import Counter from '../components/Counter';

// import necessary react testing library helpers here
// import the Counter component here

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const welcomeMessage = screen.getByText(/Counter/i);
  expect(welcomeMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
// we use getByTestId since the text is dynamic
  expect(screen.getByTestId(/count/i)).toHaveTextContent('0');
});


test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const exp = "1";
  userEvent.click(screen.getByRole('button', {name: '+'}));
  // Checks to make sure the text after pressing + is 1
  expect(screen.getByTestId(/count/i)).toHaveTextContent(exp);
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const exp = "-1";
  userEvent.click(screen.getByRole('button', {name: '-'}));
  // Checks to make sure the text after pressing - is -1
  expect(screen.getByTestId(/count/i)).toHaveTextContent(exp);
});

