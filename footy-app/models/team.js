const mongoose = require('mongoose')
const Schema = mongoose.Schema

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
  }
})
