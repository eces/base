config = require('config')
socketio_jwt = require('socketio-jwt')

module.exports = (port) => {
  option = {
    pingTimeout: 30000,
    pintInterval: 10000,
  }
  sio = require('socket.io')(port, option)
  sio.adapter(require('socket.io-redis')({
    host: global.config.get('redis.master.host'),
    port: global.config.get('redis.master.port'),
  }))
  // logger.info '[socket.io] redis connected'

  sio_v1_ws = sio.of('/v1/ws')
  sio_v1_ws.use(socketio_jwt.authorize({
    secret: global.config.get('secret.jwt'),
    handshake: true,
  }))

  sio_v1_ws.on('connection', require('./routes/ws.domain.com.js'))

  return sio
}
