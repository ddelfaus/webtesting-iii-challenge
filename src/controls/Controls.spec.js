// Test away!

import React from 'react';


import { render, fireEvent, cleanup } from '@testing-library/react';
import 'react-testing-library/cleanup-after-each';

import Controls from './Controls';
import expectExport from 'expect';


afterEach(cleanup);


test('App renders without problems', () => {
    render(<Controls/>);
  });
  

test("toggle unlock", () => {
    const toggleLocked = jest.fn();
    const { getByText } = render(<Controls closed = {true} toggleLocked={toggleLocked} />);
    fireEvent.click(getByText(/Lock gate/i));
    expect(toggleLocked).toHaveBeenCalled();
  });

  test("toggle close", () => {
    const toggleClosed = jest.fn();
    const { getByText } = render(
      <Controls closed={false} locked={false} toggleClosed={toggleClosed} />
    );
    fireEvent.click(getByText(/close gate/i));
    expect(toggleClosed).toHaveBeenCalled();
  });


  test("checks if you can open if gate is closed and locked", () => {
    //check if open button disabled
    const { getByText } = render(<Controls closed={true} locked={true} />);
  
    expect(getByText(/open gate/i).disabled === true);
  });