const mongoose = require('mongoose')

const { BookSchema } = require('./book')
 
const Schema = mongoose.Schema

const UserSchema = new Schema({
  user_id: String,
  books: {
    type: [BookSchema]
  }
})

module.exports = { User: mongoose.model('user', UserSchema), UserSchema: UserSchema }