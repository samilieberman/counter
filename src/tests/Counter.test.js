import {render, screen, fireEvent} from '@testing-library/react'
import Counter from '../components/Counter'
import React from 'react';

beforeEach(() => {
  render(<Counter />);
})

test('renders counter message', () => {
  const counterMessage = screen.getByText(/Counter/);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  const initialCount = screen.getByTestId('count');
  expect(initialCount).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  const plusButton = screen.getByText(/\+/);
  fireEvent.click(plusButton)
  const count = screen.getByTestId('count');
  expect(count).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
  const minusButton = screen.getByText(/\-/);
  fireEvent.click(minusButton)
  const count = screen.getByTestId('count');
  expect(count).toHaveTextContent('-1');
});
