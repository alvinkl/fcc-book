const mongoose = require('mongoose')
const Schema = mongoose.Schema

const { UserSchema } = require('./user')

const BookSchema = new Schema({
  name: { type: String, required: true },
  image_URI: { type: String, required: true },
  user: { type: UserSchema, required: true },
  requesters: [ UserSchema ],
})

module.exports = mongoose.model('book', BookSchema)