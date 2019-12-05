import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import Dashboard from './components/Dashboard';
import Display from './components/Display';

test('App renders without crashing.', () => {
  render(<App />);
})

test('Dashboard component has been successfully rendered.', () => {
  render(<Dashboard />);
});

test('Display is rendered successfully', () => {
  render(<Display />);
});

test('Image has been found.', () => {
  const { getByTestId } = render(<App />);

  getByTestId(/sw-img/i);
});

test('These balls totally exist. Let us also STRIKE out all those who oppose us.', () => {
  const { getAllByText } = render(<App />);
  getAllByText(/ball/i);
  getAllByText(/strike/i);
});