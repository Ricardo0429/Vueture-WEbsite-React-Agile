import React from 'react';
import { shallow } from 'enzyme';
import Grid from '../../App.js';

describe('Grid', () => {
  it('renders without crashing', () => {
    shallow(<Grid />);
  });
});
