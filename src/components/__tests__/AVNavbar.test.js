import React from 'react';
import { shallow } from 'enzyme';
import AVNavbar from '../AVNavbar';

describe('AVNavbar', () => {
  it('renders without crashing', () => {
    shallow(<AVNavbar />);
  });
});