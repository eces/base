const router = require('express').Router()

router.get('/', (req, res, next) => {
  res.status(200).json({
    status: 200,
    message: 'domain.com',
  })
})

module.exports = router