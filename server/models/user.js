const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  user: String,
  books: [{
    name: String,
    image_URI: String
  }]
})

module.exports = mongoose.model('user', UserSchema)