import React from 'react'
import App from '../App'
import CommentBox from '../CommentBox'; 

// docs : airbnb.io/enzyme

// let wrapped;

it('shows a comment box', () => {
  const wrapped = shallow(<App />); 
  expect (wrapped.find(CommentBox).length).toEqual(1); // find returns an array of all Comment Box elements found in <App /> 
})


