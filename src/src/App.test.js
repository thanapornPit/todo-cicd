import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('adds a todo when clicking the Add Todo button', () => {
  render(<App />);
  const input = screen.getByPlaceholderText('Enter a todo');
  const button = screen.getByText('Add Todo');

  fireEvent.change(input, { target: { value: 'New todo item' } });
  fireEvent.click(button);

  expect(screen.getByText('New todo item')).toBeInTheDocument();
});