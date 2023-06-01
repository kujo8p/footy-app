const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = new Schema({
  content: String
})

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    time: { type: Date, default: Date.now }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Post', postSchema)
