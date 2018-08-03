import React from 'react';
//import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';
import AVNavbar from './components/AVNavbar';

it('renders without crashing', () => {
  shallow(<App />);
});

it('renders a AVNavbar', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(AVNavbar).length).toEqual(1);
});
