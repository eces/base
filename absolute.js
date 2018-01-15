const path = require('path')

module.exports = (__path) => { 
  return path.join(__dirname, __path)
}