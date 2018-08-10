import React from 'react';
import { shallow } from 'enzyme';
import Component from '../../App.js';

describe('Component', () => {
  it('renders without crashing', () => {
    shallow(<Component />);
  });
});
