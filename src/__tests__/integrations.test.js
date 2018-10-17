import React from 'react'
import { mount } from 'enzyme'
import moxios from 'moxios'
import Root from 'Root'
import App from 'components/App'

beforeEach(() => {
  moxios.install(); // interceps axios requests 
  moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
    // return object back to axios - fool it into thinking it is a real api
    status: 200,
    response: [{name: 'Fetched 1'}, {name: 'Fetched 2'}]
  })
})

afterEach(() => {
  moxios.uninstall(); 
})

it('can fetch a list of comments and display them', (done) => {
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  );
  // attempt to render entire app
  // find the 'fetchComments' button and click it
  wrapped.find('.fetch-comments').simulate('click')
  // expect to find a list of comments
  moxios.wait(() => {
    wrapped.update()
    expect(wrapped.find('li').length).toEqual(2)
    done();
    wrapped.unmount()
  });
})