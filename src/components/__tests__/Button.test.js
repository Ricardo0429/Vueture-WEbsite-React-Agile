import React from 'react';
import { shallow } from 'enzyme';
import Button from '../../App.js';

describe('Button', () => {
  it('renders without crashing', () => {
    shallow(<Button />);
  });
});
