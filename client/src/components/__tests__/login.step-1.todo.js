import React from 'react'
import ReactDOM from 'react-dom'
import Login from '../login'

// Basic unit test

test('calls onSubmit with the username and password when submitted', () => {
  // Arrange
  const container = document.createElement('div')
  const handleSubmit = jest.fn()
  ReactDOM.render(<Login onSubmit={handleSubmit} />, container)
  // container.innerHTML //?
  const form = container.querySelector('form')
  // form.elements; //?
  const {username, password} = form.elements
  username.value = 'chucknorris'
  password.value = 'I do not need a password'
  // Act
  form.dispatchEvent(new window.Event('submit'))
  // Assert
  expect(handleSubmit).toHaveBeenCalled()
  expect(handleSubmit).toHaveBeenCalledTimes(1)
  expect(handleSubmit).toHaveBeenCalledWith({
    username: username.value,
    password: password.value,
  })
})

//////// Elaboration & Feedback /////////
// When you've finished with the exercises:
// 1. Copy the URL below into your browser and fill out the form
// 2. remove the `.skip` from the test below
// 3. Change submitted from `false` to `true`
// 4. And you're all done!
/*
http://ws.kcd.im/?ws=Testing&e=login.step-1&em=santosharakere@gmail.com
*/
test('I submitted my elaboration and feedback', () => {
  const submitted = true // change this when you've submitted!
  expect(submitted).toBe(true)
})
////////////////////////////////
