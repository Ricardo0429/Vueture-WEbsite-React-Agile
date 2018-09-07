import React from 'react';
import { shallow } from 'enzyme';
import { Button } from 'react-bootstrap';

describe('Button', () => {
  it('should be defined', () => {
   expect(Button).toBeDefined();
  });

  it('should render correctly', () => {
   const tree = shallow(
     <Button>button test</Button>
   );
   expect(tree).toMatchSnapshot();
  });

  it('should have a button value', () => {
   const tree = shallow(
     <Button>button test</Button>
   );

   expect(tree.find('button')).toHaveLength(1);
   expect(tree.find('button').html()).toContain('button test');
 });
});
