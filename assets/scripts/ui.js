'use strict'

const store = require('./store')

const signUpSuccess = function (data) {
  $('.messages').text('successfully signed up')
  $('#sign-up').toggleClass('hidden')
  document.getElementById('sign-up').reset()
  console.log('signUpSuccess ran')
}

const signInSuccess = function (data) {
  store.user = data.user
  $('.messages').text('successfully signed in')
  $('#sign-in, #sign-out, #change-password, #new-game').toggleClass('hidden')
  if (!$('#sign-up').hasClass('hidden')) {
    $('#sign-up').toggleClass('hidden')
  }
  // clear the form
  document.getElementById('sign-in').reset()
  console.log('signInSuccess ran')
}

const signOutSuccess = function (data) {
  store.user = {}
  $('.messages').text('successfully signed out')
  $('#sign-in, #sign-up, #sign-out, #change-password, #new-game').toggleClass('hidden')
  console.log('signOutSuccess ran')
}

const changePasswordSuccess = function (data) {
  $('.messages').text('successfully changed password')
  document.getElementById('change-password').reset()
  console.log('changePasswordSuccess ran')
}

const newGameSuccess = function (data) {
  $('.messages').text('successfully created new game')
  if ($('.container').hasClass('hidden')) {
    $('.container').toggleClass('hidden')
  }
  store.gameBoard.cells.forEach(function (element) { // clear the gameBoard object
    element = ''
  })
  $('.cells').html('')
}

const failure = function () {
  $('.messages').text('There was an error. Beep boop.')
}

module.exports = {
  signUpSuccess,
  signInSuccess,
  signOutSuccess,
  changePasswordSuccess,
  newGameSuccess,
  failure
}
