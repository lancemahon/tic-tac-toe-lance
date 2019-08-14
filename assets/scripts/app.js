'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

// need game event handlers
const gameEvents = require('./../game/events')

$(() => {
  $('.cells').addEventListener('click', gameEvents.quareClickHandler)
})
