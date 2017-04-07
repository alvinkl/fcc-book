const express = require('express')
const router = express.Router()

const { Book } = require('../models/book')
const { User } = require('../models/user')

router.get('/:uid', (req, res, next) => {
  console.log('------------------------------------');
  console.log(req.params.uid);
  console.log('------------------------------------');
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
  book.requester = req.body.requester
  book.owner = req.body.user_id
  book.save(err => err ? res.send(err) : res.json(book))

})

module.exports = router