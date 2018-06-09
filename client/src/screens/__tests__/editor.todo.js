import React from 'react'
import ReactDOM from 'react-dom'
import Editor from '../editor.todo'
import * as mockUtils from '../../utils/api'

jest.mock('../../utils/api', () => {
  return {
    posts: {
      create: jest.fn(() => Promise.resolve()),
    },
  }
})

const flushPromises = () => {
  return new Promise(resolve => {
    setTimeout(resolve, 0)
  })
}

test('calls onSubmit with the username and password when submitted', async () => {
  //// Arrange
  // create a fake user, post, history, and api
  //
  const container = document.createElement('div')
  const fakeUser = {id: 'santosh'}
  const fakeHistory = {
    push: jest.fn(),
  }
  // use ReactDOM.render() to render the editor to a div
  //
  ReactDOM.render(<Editor user={fakeUser} history={fakeHistory} />, container)
  // fill out form elements with your fake post
  //
  const form = container.querySelector('form')
  // form.elements //?
  // Object.getOwnPropertyNames(form.elements) //?
  // console.log(Object.keys(form.elements)) //?
  const {title, content, tags} = form.elements
  title.value = 'I like wallaby'
  // container.innerHTML //?
  content.value = 'really lots....'
  tags.value = 'js, wallaby   , unit-test'
  //// Act
  // submit form
  //
  const submit = new window.Event('submit')
  form.dispatchEvent(submit)

  // wait for promise to settle
  //
  await flushPromises()
  //// Assert
  // ensure the create function was called with the right data
  expect(fakeHistory.push).toHaveBeenCalled()
  expect(fakeHistory.push).toHaveBeenCalledTimes(1)
  expect(fakeHistory.push).toHaveBeenCalledWith('/')
  expect(mockUtils.posts.create).toHaveBeenCalledTimes(1)
  expect(mockUtils.posts.create).toHaveBeenCalledWith({
    authorId: fakeUser.id,
    content: content.value,
    date: expect.any(String),
    tags: ['js', 'wallaby', 'unit-test'],
    title: title.value,
  })
})

// TODO later...
test('snapshot', () => {})
