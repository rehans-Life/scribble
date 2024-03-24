const { readFileSync } = require('fs')
const { join } = require('path')

const secret_path = '/run/secrets/'

const getValue = (name) =>
  readFileSync(join(secret_path, `${name}`), 'utf-8')

module.exports = {
  PORT: process.env.PORT || '4000',
  NODE_ENV: 'production',
  DB_URI: getValue('DB_URI').replace('<password>', getValue('DB_PASSWORD')),
  FRONTEND_URI: process.env.FRONTEND_URI,
}
