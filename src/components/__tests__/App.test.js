import React from 'react'
import ReactDOM from 'react-dom'
import App from '../App'

it('shows a comment box', () => {
  const div = document.createElement('div'); 
  ReactDOM.render(<App />, div); 
  // looks inside fake div to see if comment box is in there
  // console.log(div.innerHTML)
  expect(div.innerHTML).toContain('Comment Box')
  ReactDOM.unmountComponentAtNode(div); 
})

// let wrapped;

// it('shows a comment box', () => {
//   expect(wrapped.find(CommentBox).length).toEqual(1);
// });


