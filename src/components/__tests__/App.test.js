import React from 'react'
import App from '../App'
import {shallow} from 'enzyme' 
import CommentBox from 'components/CommentBox'
import CommentList from 'components/CommentList'

// docs : airbnb.io/enzyme

let wrapped;

beforeEach(() => {
  wrapped = shallow(<App />);
})

it('shows a comment box', () => { 
  expect (wrapped.find(CommentBox).length).toEqual(1); // find returns an array of all Comment Box elements found in <App /> 
})

it('shows a comment list', () => {
  expect(wrapped.find(CommentList).length).toEqual(1);
})
