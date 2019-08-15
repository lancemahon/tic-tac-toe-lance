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
  $('#sign-in, #sign-out, #change-password, #new-game, #get-games').toggleClass('hidden')
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
  $('#sign-in, #sign-up, #sign-out, #change-password, #new-game, #get-games, .container').toggleClass('hidden')
  console.log('signOutSuccess ran')
}

const changePasswordSuccess = function (data) {
  $('.messages').text('successfully changed password')
  document.getElementById('change-password').reset()
  console.log('changePasswordSuccess ran')
}

const newGameSuccess = function (data) {
  store.game = data.game
  store.player = 'x'
  $('.game-msg').text('Player ' + store.player + ' it\'s your turn!')
  $('.messages').text('successfully created new game')
  if ($('.container').hasClass('hidden')) {
    $('.container').toggleClass('hidden')
  }
  if ($('.game-msg').hasClass('hidden')) {
    $('.game-msg').toggleClass('hidden')
  }
  // used to update my local game object here. No longer necessary because of
  // the first line in this function
  // store.game.cells.forEach(function (element) { // clear the gameBoard object
  //   element = ''
  $('.cells').html('')
}

const squareClickSuccess = function () {
  if (store.game.over) {
    return
  }
  $('.game-msg').text('Player ' + store.player + ' it\'s your turn!')
}

const gameOver = function (player) {
  $('.messages').text('Player ' + player + ' won! Congratulations!')
  if ($('#play-again').hasClass('hidden')) {
    $('#play-again').toggleClass('hidden')
  }
  $('.game-msg').text('Time for another?')
}

const getGamesSuccess = function (data) {
  $('.game-list').html(data)
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
  gameOver,
  squareClickSuccess,
  getGamesSuccess,
  failure
}
