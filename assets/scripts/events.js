'use strict'

// need to require api and ui to call their functions
// TODO need to make these files
const api = require('./api')
const ui = require('./ui')
const store = require('./store')
const gameBoard = store.gameBoard
const getFormFields = require('./../../lib/get-form-fields')

// TODO make my event handlers

// squareClickHandler
const squareClickHandler = function () {
  // need to check if the square is clicked. I want to access a gameBoard
  // object like so --> gameBoard.cells[i] where i is the cell clicked
  const cell = $(this).attr('data-id')
  if (!gameBoard.cells[cell]) {
  // square is empty, add an x
    // make api call to add an x to the game state
    api.squareClick($(this))
      .then(ui.squareClickSuccess)
      .catch(ui.failure)
    gameBoard.cells[cell] = 'x'
    $(this).html('x')
    //    // end the turn since the user played, probably call some endTurn function
  } else {
    // square is taken, display message to user
    $('.messages').html('That square is taken, please choose another!')
  }
}

const onSignUp = function (event) {
  // prevent default action from happening
  event.preventDefault()
  console.log('submitted sign-up!')
  // get form data
  const data = getFormFields(event.target)
  console.log('sign up data is: ', data)

  // make the api call
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.failure)
}

const onSignIn = function (event) {
  // prevent default
  event.preventDefault()
  console.log('submitted sign-in!')
  // get form data
  const data = getFormFields(event.target)
  console.log('sign-in data is: ', data)

  // make the api call
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.failure)
}

const onSignOut = function (event) {
  // prevent default
  event.preventDefault()

  const data = getFormFields(event.target)
  // make the api call
  api.signOut(data)
    .then(ui.signOutSuccess)
    .catch(ui.failure)
}

const onChangePassword = function (event) {
  // prevent default
  event.preventDefault()

  const data = getFormFields(event.target)
  // make api call
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.failure)
}

const onNewGame = function (event) {
  // prevent default
  event.preventDefault()

  // make api call
  api.newGame()
    .then(ui.newGameSuccess)
    .catch(ui.failure)
}

module.exports = {
  squareClickHandler,
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword,
  onNewGame
}
