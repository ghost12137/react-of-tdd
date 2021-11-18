import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';

import CompTest from './CompTest';
import { fetchPosts } from './fetchOnce';

jest.mock('./fetchOnce');
describe('CompTest', () => {
  test('renders CompTest componet', async () => {

    render(<CompTest />);
    const btn = await screen.findByTestId('click');
    expect(btn).toBeEnabled();

    fireEvent.click(btn);

    const text = await screen.findByText('显示');
    console.log(text);
    expect(text).toBeInTheDocument();
  });
})