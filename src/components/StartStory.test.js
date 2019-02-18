import React from 'react';
import { shallow } from 'enzyme';
import '../setupTests'
import StartStory from './StartStory';
import {Link} from 'react-router-dom'

it('should render correctly with no props', () => {
  const component = shallow(<StartStory/>);
  
  expect(component).toMatchSnapshot();
});