import { render, fireEvent, screen } from "@testing-library/react";

// import the Counter component here
import Counter from '../components/Counter.js';

beforeEach(() => {
  //Render the Counter component here
  render(<Counter />)

})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  
  ;

  const header = screen.queryByText("Counter");
  const plus = screen.queryByTestId("incrementButton");
  const minus = screen.queryByTestId("decrementButton");

  expect(header).not.toBeNull();
  expect(plus).not.toBeNull();
  expect(minus).not.toBeNull();
  //expect(screen.getByRole('heading', {level:2})).toHaveValue("Counter");
  //expect(screen.getByRole('paragraph')).toHaveValue(data-testid="count">{count});
 // expect(screen.getByRole('button', {name: "+"})).toHaveValue("+");
 // expect(screen.getByRole('button', {name: "-"})).toHaveValue("-");

});

test('should render initial count with value of 0', () => {
  //const { queryByText, getByTestId} = render(<Counter />)
  // Complete the unit test below based on the objective in the line above
  const counter = screen.getByTestId("count");
  expect(counter).toHaveTextContent('0');

});

test('clicking + increments the count', () => {

  //const { queryByText, getByTestId} = render(<Counter />)

  const counter = screen.getByTestId("count");
  const incrementButton = screen.getByTestId("incrementButton");

  fireEvent.click(incrementButton);

  expect(counter).toHaveTextContent('1');
  // Complete the unit test below based on the objective in the line above
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above

  //const { queryByText, getByTestId} = Counter//render(<Counter />)

  const counter = screen.getByTestId("count");
  const decrementButton = screen.getByTestId("decrementButton");

  fireEvent.click(decrementButton);

  expect(counter).toHaveTextContent('-1');
});
