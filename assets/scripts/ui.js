'use strict'

const store = require('./store')

const signUpSuccess = function (data) {
  $('.messages').text('successfully signed up')
  $('#sign-up').toggleClass('hidden')
  document.getElementById('sign-up').reset()
}

const signInSuccess = function (data) {
  store.user = data.user
  $('.messages').text('successfully signed in')
  $('#sign-in, #sign-out, #change-password, #new-game, #get-games, #get-over-games, #get-current-games').toggleClass('hidden')
  if (!$('#sign-up').hasClass('hidden')) {
    $('#sign-up').toggleClass('hidden')
  }
  // clear the form
  document.getElementById('sign-in').reset()

  // have to change all the games buttons to "see" not "hide"
  $('.get-games-button').val('See your games!')
  $('.get-over-games-button').val('See your finished games!')
  $('.get-current-games-button').val('See your unfinished games!')
}

const signOutSuccess = function (data) {
  store.user = {}
  $('.messages').text('successfully signed out')
  console.log('inside signOutSuccess')
  $('#sign-in, #sign-up, #sign-out, #change-password, #new-game, #get-games, #get-over-games, #get-current-games').toggleClass('hidden')
  if (!$('.container').hasClass('hidden')) {
    $('.container').toggleClass('hidden')
  }
  $('.game-list').text('')
  $('.over-game-list').text('')
  $('.current-game-list').text('')
}

const changePasswordSuccess = function (data) {
  $('.messages').text('successfully changed password')
  document.getElementById('change-password').reset()
}

const newGameSuccess = function (data) {
  store.game = data.game
  store.player = 'x'
  $('.game-msg').text('Player ' + store.player + ' it\'s your turn!')
  $('.messages').text('successfully created new game')
  $('.winning-cells').toggleClass('winning-cells')
  if ($('.container').hasClass('hidden')) {
    $('.container').toggleClass('hidden')
  }
  if ($('.game-msg').hasClass('hidden')) {
    $('.game-msg').toggleClass('hidden')
  }
  $('.cells').html('')
}

const squareClickSuccess = function () {
  if (store.game.over) {
    return
  }
  $('.game-msg').text('Player ' + store.player + ' it\'s your turn!')
}

const gameOver = function (player) {
  if (store.game.full === true) {
    $('.messages').text('The board is full, this one\'s a draw!')
  } else {
    $('.messages').text('Player ' + player + ' won! Congratulations!')
  }
  if ($('#play-again').hasClass('hidden')) {
    $('#play-again').toggleClass('hidden')
  }
  $('.game-msg').text('Time for another?')
  outlineWinningCells()
}

const outlineWinningCells = function () {
  const winningCells = store.winningCells
  for (let i = 0; i < 3; i++) {
    $('[data-cell-index|=' + winningCells[i] + ']')
      .addClass('winning-cells')
  }
}

const getGamesSuccess = function (data) {
  const gameList = $('.game-list')
  const getGamesButton = $('.get-games-button')
  if (getGamesButton.attr('value') === 'See your games!') {
    // data.games.forEach(function (game) {
    //   gameCount++
    // })
    const gameCount = data.games.length
    if (gameCount === 1) {
      gameList.text('You\'ve played 1 game!')
    } else if (gameCount === 0) {
      gameList.text('You haven\'t played any games!')
    } else {
      gameList.text('You\'ve played ' + gameCount + ' games!')
      getGamesButton.val('Hide your games!')
    }
  } else if (getGamesButton.attr('value') === 'Hide your games!') {
    gameList.text('')
    getGamesButton.val('See your games!')
  }
}

const getOverGamesSuccess = function (data) {
  const gameList = $('.over-game-list')
  const getGamesButton = $('.get-over-games-button')
  if (getGamesButton.attr('value') === 'See your finished games!') {
    // data.games.forEach(function (game) {
    //   gameCount++
    // })
    const gameCount = data.games.length
    if (gameCount === 1) {
      gameList.text('You\'ve finished 1 game!')
    } else if (gameCount === 0) {
      gameList.text('You haven\'t finished any games!')
    } else {
      gameList.text('You\'ve finished ' + gameCount + ' games!')
      getGamesButton.val('Hide your finished games!')
    }
  } else if (getGamesButton.attr('value') === 'Hide your finished games!') {
    gameList.text('')
    getGamesButton.val('See your finished games!')
  }
}

const getCurrentGamesSuccess = function (data) {
  const gameList = $('.current-game-list')
  const getGamesButton = $('.get-current-games-button')
  if (getGamesButton.attr('value') === 'See your unfinished games!') {
    // data.games.forEach(function (game) {
    //   gameCount++
    // })
    const gameCount = data.games.length
    if (gameCount === 1) {
      gameList.text('You have 1 unfinished game!')
    } else if (gameCount === 0) {
      gameList.text('You have no unfinished games!')
    } else {
      gameList.text('You have ' + gameCount + ' unfinished games!')
      getGamesButton.val('Hide your unfinished games!')
    }
  } else if (getGamesButton.attr('value') === 'Hide your unfinished games!') {
    gameList.text('')
    getGamesButton.val('See your unfinished games!')
  }
}

const failure = function () {
  $('.messages').text('There was an error. Beep boop.')
  // reset all form fields on any failed submission
  document.getElementById('sign-in').reset()
  document.getElementById('sign-out').reset()
  document.getElementById('sign-up').reset()
  document.getElementById('change-password').reset()
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
  getOverGamesSuccess,
  getCurrentGamesSuccess,
  failure
}
