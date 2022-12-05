import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import Counter from '../components/Counter';

beforeEach(() => {
    render(<Counter />);
})

test('renders counter message', () => {
    expect(screen.getByText('Counter')).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
    expect(screen.getByTestId('count')).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
    const button = screen.getByText('+');
    act(() => {
        button.click();
    });
    expect(screen.getByTestId('count')).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
    const button = screen.getByText('-');
    act(() => {
        button.click();
    });
    expect(screen.getByTestId('count')).toHaveTextContent('-1');
});
