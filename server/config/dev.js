
module.exports = {
  PORT: process.env.PORT || '4000',
  NODE_ENV: 'development',
  DB_URI:
    process.env.DB_URI?.replace('<password>', process.env.DB_PASSWORD) || '',
  FRONTEND_URI: process.env.FRONTEND_URI,
}
