const mongoose = require('mongoose')
const Schema = mongoose.Schema

const { UserSchema } = require('./user')

const BookSchema = new Schema({
  name: { type: String, required: true },
  image_URI: { type: String, required: true },
  requesters: [String],
})

module.exports = { Book: mongoose.model('book', BookSchema), BookSchema }