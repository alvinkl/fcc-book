const express = require("express")
const router = express.Router()

const User = require('../models/user')

router.route('/')
  .get((req, res, next) => {
    User.find({}, (err, user) => err ? res.send(err) : res.json(user))
  })
  .post((req, res, next) => {
  const name = req.body.name
  const email = req.body.email
  const password = req.body.password

  // check if username already exists
  User.findOne({ username: name }, (err, user) => {
    if (err) return res.send(err)
    if (user) return res.json({ message: `Username ${name} already exist` })
    
    var newUser = new User()
    
    newUser.username = name
    newUser.email = email
    newUser.password = password
    newUser.books = []

    newUser.save(err => err ? res.send(err) : res.json(newUser))
  })
})

router.post('/login', (req, res, next) => {
  const email = req.body.email
  const password = req.body.password

  User.findOne({ email, password}, (err, user) => {
    if (err) return res.send(err)
    if (!user) return res.json({ message: `user ${email} not found!` }) 
    return res.json(user)
  })
})
module.exports = router