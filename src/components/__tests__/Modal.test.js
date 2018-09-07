import React from 'react';
import { shallow } from 'enzyme';
import { Modal } from 'react-bootstrap';

describe('Modal', () => {
  it('renders without crashing', () => {
    shallow(<Modal />);
  });
});
