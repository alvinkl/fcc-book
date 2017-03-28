const express = require('express')
const router = express.Router()

const Book = require('../models/book')

router.get('/', (req, res, next) => {
    Book.find((err, books) => err ? res.send(err) : res.json(books))
})

router.post('/', (req, res, next) => {
  const book = new Book()

  book.name = req.body.name
  book.image_URI = req.body.URI

  book.save(err => err ? res.send(err) : res.json(book))
})

module.exports = router