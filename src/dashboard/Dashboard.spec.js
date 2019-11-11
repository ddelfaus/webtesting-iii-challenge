import React from 'react';
import { render } from '@testing-library/react';
import DashBoard from './DashBoard'

test('Should match the snapshot', () => {
    expect(render(<DashBoard/>)).toMatchSnapshot();
  });