import React from 'react';
import { shallow } from 'enzyme';
import { Row } from 'react-bootstrap';

describe('Row', () => {
  it('renders without crashing', () => {
    shallow(<Row />);
  });
});
