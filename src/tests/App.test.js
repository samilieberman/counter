import { render, screen } from '@testing-library/react';
import App from '../components/App';
import React from 'react';

test('renders welcome message', () => {
  render(<App />);
  const welcomeMessage = screen.getByText(/Welcome to my website!/i);
  expect(welcomeMessage).toBeInTheDocument();
});
