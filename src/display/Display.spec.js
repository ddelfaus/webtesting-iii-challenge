import React from 'react';
import { render } from '@testing-library/react';
import Display from './Display'

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
  test('Contains the button Lock Gate', () => {
    const { getByText } = render(<Display />);
    getByText(/Unlocked/i);
    getByText(/open/i);
  });