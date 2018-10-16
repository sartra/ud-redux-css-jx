import React from 'react'
import CommentBox from 'components/CommentBox'; 
import { mount } from 'enzyme' // full DOM 
import Root from 'root'; 

let wrapped; 

beforeEach(() => {
  wrapped = mount(
    <Root>
      <CommentBox />
    </Root>);
}); 

afterEach(() => {
  wrapped.unmount(); 
})

it('has a text area and a button', () => { 
  expect(wrapped.find('button').length).toEqual(1); 
  expect(wrapped.find('textarea').length).toEqual(1); 
}); 

//describe func used to group together similar tests 
describe('the text area', () => {
  beforeEach(() => {
    // simulate a change event in text area with simulate method enzyme has simulate(event[, mock event object])
    wrapped.find('textarea').simulate('change', {
      target: { value: 'new comment' }
    })
    // force the component to update 
    wrapped.update();
  })

  it('has a text area that users can type in', () => {
    expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
  })

  it('when input is submitted, text area gets emptied', () => {
    wrapped.find('form').simulate('submit')
    wrapped.update();
    expect(wrapped.find('textarea').prop('value')).toEqual('');
  })
})
