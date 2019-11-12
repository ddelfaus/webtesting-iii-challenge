import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Display from './Display'

afterEach(cleanup)

test('Should Match The Snapshot', () => {
    expect(render(<Display/>)).toMatchSnapshot();
  });

test('App renders', () => {
    render(<Display/>);
  });

  test('Contains the button Close Gate', () => {
    const { getByText } = render(<Display />);
    getByText(/Unlocked/i);
    getByText(/Open/i);
  });

   

