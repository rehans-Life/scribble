let keys;

if ((process.env.NODE_ENV || '').trim() === 'development') {
    keys = require('./dev').default
  } else {
    keys = require('./prod').default
  }
  
module.exports = keys;