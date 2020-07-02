import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

const expectedLabelText = 'Type to search a movie:';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(expectedLabelText);
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react link', () => {
  const { getByLabelText } = render(<App />);
  const inputElement = getByLabelText(expectedLabelText);
  expect(inputElement).toBeInTheDocument();
});
