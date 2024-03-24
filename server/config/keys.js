let keys;

if ((process.env.NODE_ENV || '').trim() === 'development') {
    keys = require('./dev')
  } else {
    keys = require('./prod')
  }
  
module.exports = keys;