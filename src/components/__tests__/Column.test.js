import React from 'react';
import { shallow } from 'enzyme';
import { Col } from 'react-bootstrap';

describe('Col', () => {
  it('renders without crashing', () => {
    shallow(<Col />);
  });
});
