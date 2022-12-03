// import necessary react testing library helpers here
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
// import the Counter component here
import Counter from '../components/Counter';

beforeEach(() => {
	render(<Counter />);
})

test('renders counter message', () => {
	const countMessage = screen.getByText(/count/i);
	expect(countMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
	expect(screen.getByTestId("count").textContent).toBe("0");
});

test('clicking + increments the count', () => {
	userEvent.click(screen.getByText('+'));
	expect(screen.getByTestId("count").textContent).toBe("1");
});

test('clicking - decrements the count', () => {
	userEvent.click(screen.getByText('-'));
	expect(screen.getByTestId("count").textContent).toBe("-1");
});
