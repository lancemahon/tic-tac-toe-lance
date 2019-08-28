'use strict'

const store = require('./store')
const ui = require('./ui')
store.winningCells = []

const checkOver = function () {
  if (hasWinCondition(store.player)) {
    store.game.over = true
    return true
  } else if (boardIsFull()) {
    store.game.full = true
    store.game.over = true
    return true
  } else {
    return false
  }
}

const endTurn = function () {
  if (checkOver()) {
    ui.gameOver(store.player)
  } else if (store.player === 'x') {
    store.player = 'o'
  } else if (store.player === 'o') {
    store.player = 'x'
  }
}

const getPlayerLetter = function (player) {
  // return x or o
  if (player === 'player_x') {
    return 'x'
  } else if (player === 'player_y') {
    return 'y'
  }
}

const boardIsFull = function () {
  const cells = store.game.cells
  if (cells.some(x => x === '')) {
    return false // if some squares are empty, board is not full
  } else {
    return true // if no squares are empty, board is full
  }
}

const hasWinCondition = function (player) {
  const game = store.game
  const cells = game.cells
  // need to check if player has 3 in a row
  // there are 8(?) possibilities:
  // 0, 1, 2
  // 3, 4, 5
  // 6, 7, 8
  // we can have [0,1,2],[3,4,5],[6,7 8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
  // basically we need to check if any of these cell sets have been taken by the player
  if (cells[0] === cells[1] && cells[0] === cells[2] && cells[0] === player) {
    store.winningCells.push('0', '1', '2')
    return true
  } else if (cells[3] === cells[4] && cells[3] === cells[5] && cells[3] === player) {
    store.winningCells.push('3', '4', '5')
    return true
  } else if (cells[6] === cells[7] && cells[6] === cells[8] && cells[6] === player) {
    store.winningCells.push('6', '7', '8')
    return true
  } else if (cells[0] === cells[3] && cells[0] === cells[6] && cells[0] === player) {
    store.winningCells.push('0', '3', '6')
    return true
  } else if (cells[1] === cells[4] && cells[1] === cells[7] && cells[1] === player) {
    store.winningCells.push('1', '4', '7')
    return true
  } else if (cells[2] === cells[5] && cells[2] === cells[8] && cells[2] === player) {
    store.winningCells.push('2', '5', '8')
    return true
  } else if (cells[0] === cells[4] && cells[0] === cells[8] && cells[0] === player) {
    store.winningCells.push('0', '4', '8')
    return true
  } else if (cells[2] === cells[4] && cells[2] === cells[6] && cells[2] === player) {
    store.winningCells.push('2', '4', '6')
    return true
  } else {
    return false
  }
}

module.exports = {
  store,
  endTurn,
  getPlayerLetter,
  hasWinCondition,
  checkOver,
  boardIsFull
}
