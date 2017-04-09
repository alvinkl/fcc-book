const express = require('express')
const router = express.Router()

const { Book } = require('../models/book')
const { User } = require('../models/user')

router.get('/:uid', (req, res, next) => {
  const owner = req.params.uid 
  Book.find({ owner }, (err, books) => err ? res.send(err) : res.json(books))
})

router.get('/', (req, res, next) => {
  Book.find((err, books) => err ? res.send(err) : res.json(books))
})

router.post('/', (req, res, next) => {
  
  const book = new Book()

  book.name = req.body.name
  book.image_URI = req.body.image_URI
  book.requesters = []
  book.owner = req.body.user_id
  book.save(err => err ? res.send(err) : res.json(book))

})

router.post('/update', (req, res, next) => {
  const user_id = req.body.user_id
  const book_id = req.body.book_id

  Book.findById(book_id, (err, book) => {
    if (err) return res.send(err)

    book.requesters = [ ...book.requesters, user_id ]
    book.save((err, updatedBook) => err ? res.send(err) : res.json(updatedBook))
  })
})

module.exports = router