'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

// need game event handlers
const events = require('./events')

$(() => {
  $('.cells').on('click', events.squareClickHandler)
  $('#sign-up').on('submit', events.onSignUp)
  $('#sign-in').on('submit', events.onSignIn)
  $('#sign-out').on('submit', events.onSignOut)
  $('#change-password').on('submit', events.onChangePassword)
  $('#new-game').on('submit', events.onNewGame)
  $('#play-again').on('submit', events.onNewGame)
  $('#get-games').on('submit', events.onGetGames)
  $('#get-over-games').on('submit', events.onGetOverGames)
  $('#get-current-games').on('submit', events.onGetCurrentGames)
})
