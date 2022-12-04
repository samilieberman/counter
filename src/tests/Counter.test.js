// import necessary react testing library helpers here
// import the Counter component here
import { render, screen } from '@testing-library/react';
import Counter from '../components/Counter';
import userEvent from '@testing-library/user-event'
import React, { click } from "react";
//import {screen} from '@testing-library/dom'

let counter
let increaseButton
let decreaseButton

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />)
  counter = screen.getByTestId('count')
  increaseButton = screen.getByRole('button', { name: '+' })
  decreaseButton = screen.getByRole('button', { name: '-' })
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  expect(screen.getByText("Counter")).toBeInTheDocument()
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  expect(counter).toHaveTextContent("0")
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  userEvent.click(increaseButton)
  expect(counter).toHaveTextContent("1")
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  userEvent.click(decreaseButton)
  expect(counter).toHaveTextContent("-1")
});
