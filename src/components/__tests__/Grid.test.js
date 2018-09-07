import React from 'react';
import { shallow } from 'enzyme';
import { Grid } from 'react-bootstrap';

describe('Grid', () => {
  it('renders without crashing', () => {
    shallow(<Grid />);
  });
});
