const router = require('express').Router()
const serve_static = require('serve-static')

router.get('/test', (req, res, next) => {
  res.status(200).json({
    status: 200,
    message: 'domain.com',
  })
  // res.render('index.pug')
})

router.get('*', serve_static('./dist'))

router.use((req, res, next) => {
  next(new StatusError(404, 'page not found'))
})

module.exports = router