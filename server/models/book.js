const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BookSchema = new Schema({
  name: String,
  image_URI: String,
})

module.exports = mongoose.model('book', BookSchema)