import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/test/);
  expect(linkElement).toBeInTheDocument();
  // expect(1 + 1).toBe(2)
});
