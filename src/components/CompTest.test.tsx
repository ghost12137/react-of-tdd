import React from 'react';
import {render, screen, waitFor} from '@testing-library/react';

import CompTest from './CompTest';
import { fetchPosts } from './fetchOnce';

jest.mock('./fetchOnce');
describe('CompTest', () => {
  test('renders CompTest componet', async () => {

    const result = await fetchPosts('asd');

    if (result.status === 200) {
      console.log(result.data);
    }

    await render(<CompTest />);
    screen.debug();
  });
})