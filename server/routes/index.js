const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
  res.json({ data: "dataSeed" })
})

module.exports = router
