'use strict'

// need to require api and ui to call their functions
// TODO need to make these files
const api = require('./api')
const ui = require('./ui')
const store = require('./store')
const getFormFields = require('./../../lib/get-form-fields')
const gameLogic = require('./game-logic')

// squareClickHandler
const squareClickHandler = function () {
  const player = store.player
  const game = store.game

  const cell = $(this).attr('data-cell-index') // store index of clicked cell
  if (game.over) { // no plays after the game ends
    $('.game-msg').text('Time for another?')
  } else if (!store.game.cells[cell]) {
    // square is empty, add an x
    game.cells[cell] = player
    gameLogic.checkOver() // update the game to be 'over' if it's over
    // make api call to add an x to the game state
    api.updateGame(cell)
      .then(ui.squareClickSuccess)
      .catch(ui.failure)
    $(this).html(player)
    gameLogic.endTurn()
  } else {
    $('.messages').html('That square is taken, please choose another!')
  }
}

const onSignUp = function (event) {
  // prevent default action from happening
  event.preventDefault()
  // get form data
  const data = getFormFields(event.target)

  // make the api call
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.failure)
}

const onSignIn = function (event) {
  // prevent default
  event.preventDefault()
  // get form data
  const data = getFormFields(event.target)

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
  store.winningCells = []

  // make api call
  api.newGame()
    .then(ui.newGameSuccess)
    .catch(ui.failure)
}

const onGetGames = function (event) {
  // prevent default
  event.preventDefault()

  // make api call
  api.getGames()
    .then(ui.getGamesSuccess)
    .catch(ui.failure)
}

const onGetOverGames = function (event) {
  // prevent default
  event.preventDefault()

  // make api call
  api.getOverGames()
    .then(ui.getOverGamesSuccess)
    .catch(ui.failure)
}

const onGetCurrentGames = function (event) {
  // prevent default
  event.preventDefault()

  // make api call
  api.getCurrentGames()
    .then(ui.getCurrentGamesSuccess)
    .catch(ui.failure)
}

module.exports = {
  squareClickHandler,
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword,
  onNewGame,
  onGetGames,
  onGetOverGames,
  onGetCurrentGames
}
