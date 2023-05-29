const mongoose = require('mongoose')
const Schema = mongoose.Schema

const statsSchema = new Schema({
  matches: Number,
  goals: Number,
  assists: Number
})

const playerSchema = new Schema({
  number: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  position: {
    type: String,
    required: true
  },
  stats: [statsSchema]
})

module.exports = mongoose.model('Player', playerSchema)
