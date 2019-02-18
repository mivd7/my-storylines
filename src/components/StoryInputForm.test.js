import React from 'react';
import { shallow } from 'enzyme';
import '../setupTests'
import StoryInputForm from './StoryInputForm';
import {Link} from 'react-router-dom'


it('should render correctly with storyId prop', () => {
  const story = function(err) {
            const storyId = "123"
             if (err) {
               options.fail.apply(storyId, arguments);
             }
             resolve(storyId);
           }

  const component = shallow(<StoryInputForm storyId={story}/>);
  
  expect(component).toMatchSnapshot();
});