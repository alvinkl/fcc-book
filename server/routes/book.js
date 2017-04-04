const express = require('express')
const router = express.Router()

const { Book } = require('../models/book')
const { User } = require('../models/user')

router.get('/', (req, res, next) => {
  User.find((err, books) => err ? res.send(err) : res.json(books))
})

router.post('/', (req, res, next) => {
  
  const book = new Book()

  book.name = req.body.name
  book.image_URI = req.body.image_URI
  book.requester = req.body.requester
  book.save(err => {
    if (err) return res.send(err)
  })
    .then(() => {
      console.log('------------------------------------');
      console.log(book);
      console.log('------------------------------------');
      User.findOne({ user_id: req.body.user_id }, (err, user) => {
        console.log('------------------------------------');
        console.log(user);
        console.log('------------------------------------');
        user.books.push(book)
        user.save(err => err ? res.send(err) : res.json(user))
      })
      

    })

  book.name = req.body.name
  book.image_URI = req.body.URI
  // add user

  book.save(err => err ? res.send(err) : res.json(book))
})

module.exports = router