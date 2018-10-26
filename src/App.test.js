import React from 'react';
//import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';
import Navbar from './components/Navbar';
import Button from 'react-bootstrap';

it('renders without crashing', () => {
  shallow(<App />);
});

it('renders a Navbar', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(Navbar).length).toEqual(1);
});

