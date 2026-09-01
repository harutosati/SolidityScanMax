// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders SolidityScanMax title', () => {
    render(<App />);
    const titleElement = screen.getByText(/SolidityScanMax/i);
    expect(titleElement).toBeInTheDocument();
});
