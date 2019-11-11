// Test away!

import React from 'react';


import { render, fireEvent } from '@testing-library/react';
import 'react-testing-library/cleanup-after-each';

import Controls from './Controls';

test('App renders without problems', () => {
    render(<Controls/>);
  });
  

test("toggle unlock", () => {
    const toggleLocked = jest.fn();
    const { getByText } = render(<Controls toggleLocked={toggleLocked} />);

    const button = getByText(/Lock Gate/i);
    fireEvent.click(button);
  });

