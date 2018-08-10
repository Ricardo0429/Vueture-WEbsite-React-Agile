import React from 'react';
import { shallow } from 'enzyme';
import Modal from '../../App.js';

describe('Modal', () => {
  it('renders without crashing', () => {
    shallow(<Modal />);
  });
});
