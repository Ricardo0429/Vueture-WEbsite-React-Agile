import React from 'react';
import { shallow } from 'enzyme';
import Button from '../../App.js';

describe('Button', () => {
  it('should be defined', () => {
   expect(Button).toBeDefined();
  });

  it('should render correctly', () => {
   const tree = shallow(
     <Button name='button test' />
   );
   expect(tree).toMatchSnapshot();
  });

  // it('renders without crashing', () => {
  //   shallow(<Button />);
  // });

  it('should have a button value', () => {
   const tree = shallow(
     <Button name='button test' />
   );
   expect(tree.getElement('.button').value).toEqual('button test');
 });
});
