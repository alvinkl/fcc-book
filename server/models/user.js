const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  username: String,
  password: String,
  email: String,
  books: [{
    name: String,
    image_URI: String,
    requested: Boolean,
  }]
})

module.exports = { User: mongoose.model('user', UserSchema), UserSchema: UserSchema }