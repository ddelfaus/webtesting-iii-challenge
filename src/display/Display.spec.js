import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Display from './Display'
import { get } from 'http';
import expectExport from 'expect';

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


  test("It looks for the Green class when it is unlocked or open", () => {


    const { getByText, rerender } = render(<Display locked={false} />);
    getByText(/lock/i);
    expect(getByText(/lock/i).classList.contains("green-led")).toBe(true);
  
    rerender(<Display closed={false} />);
    getByText(/open/i);
    expect(getByText(/open/i).classList.contains("green-led")).toBe(true);
  });

   
test("It looks for the red class when it is locked or closed", () => {


  const { getByText, rerender } = render(<Display locked={true} />);
  getByText(/locked/i);
  expect(getByText(/locked/i).classList.contains("red-led")).toBe(true);

  rerender(<Display closed={true} />);
  getByText(/closed/i);
  expect(getByText(/closed/i).classList.contains("red-led")).toBe(true);
});