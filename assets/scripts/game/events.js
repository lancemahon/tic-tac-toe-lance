'use strict'

// need to require api and ui to call their functions
// TODO need to make these files
const api = require('./api')
const ui = require('./ui')

// TODO make my event handlers

// squareClickHandler
const squareClickHandler = function () {
  console.log('square got clicked')
  // need to check if the square is clicked. I want to access a gameBoard
  // object like so --> gameBoard.cells[i] where i is the cell clicked

  // square is empty, add an x

  //    // end the turn since the user played, probably call some endTurn function

  // square is taken, display message to user
}

module.exports = {
  squareClickHandler
}
