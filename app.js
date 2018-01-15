const express = require('express')
const bodyParser = require('body-parser')
const serveStatic = require('serve-static')
const config = require('config')
const multer = require('multer')
const subdomain = require('express-subdomain')
const cors = require('cors')

global.StatusError = class StatusError extends Error {
  constructor(status, message, data) {
    super(message);
    this.name = 'StatusError'
    this.status = status
    this.data = data || null
    // Error.captureStackTrace(this, StatusError)
  }
}

const app = express()

if (process.env.NODE_ENV !== 'production') {
  app.disable('etag')
  app.set('json spaces', 2)
}

app.use('/dist', serveStatic('./dist'))

app.use(cors({
  credentials: true,
  origin: config.cors,
  method: 'GET,POST,PUT,DELETE,OPTIONS',
  allowedHeaders: 'Origin,X-Requested-With,X-UUID,Content-Type,Accept,Authorization',
}))

app.use(bodyParser.text({limit: '5mb'}))
app.use(bodyParser.json({limit: '5mb'}))
app.use(bodyParser.urlencoded({
  limit: '5mb', 
  extended: true,
  parameterLimit: 1000,
}))
// app.use(multer({
//   inMemory: true,
//   limits: {
//     files: 10,
//     fileSize: 1024*1024*5,
//   }
// }))

app.use(subdomain('test', require('./routes/test.domain.com.js')))
app.use(require('./routes/domain.com.js'))

app.use('*', (req, res, next) => {
  next(new StatusError(404, 'api not found'))
})

app.use(function (err, req, res, next) {
  if (+err.status > 400 && (+err.status != 404) && (+err.status != 429))
    logger.error(err)

  if (req._api) {
    res.status(200).json({
      status: err.status || 500,
      message: err.message,
    })
  } else {
    res.status(err.status || 500).json({
      status: err.status || 500,
      message: err.message,
    })
  }
})

const init = () => {
  // const db = require('./db')
  // master, slave, cache
  process.send && process.send('ready')
  // start service: queue
}

process.on('SIGINT', () => {
  global.SIGINT = true
  setTimeout(() => {
    const db = require(__absolute('/db'))
    db.pool.end()
    process.exit(0)
  }, 5000)
})

process.nextTick(init)

module.exports = app