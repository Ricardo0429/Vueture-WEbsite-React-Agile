import React from 'react';
import { shallow } from 'enzyme';
import Row from '../../App.js';

describe('Row', () => {
  it('renders without crashing', () => {
    shallow(<Row />);
  });
});
