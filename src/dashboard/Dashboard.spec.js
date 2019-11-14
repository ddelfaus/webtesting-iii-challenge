import React from 'react';
import { render } from '@testing-library/react';
import DashBoard from './DashBoard'

test('Should match the snapshot', () => {
    expect(render(<DashBoard/>)).toMatchSnapshot();
  });



  test ('locked is false', () => {
    const {getByText} = render(<DashBoard/>)
    
    getByText(/^unlocked$/i)
    getByText(/^open$/i)


  })

