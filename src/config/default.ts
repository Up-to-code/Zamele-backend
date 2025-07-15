export default {
  port: process.env.PORT || 3000,
  dbUri: process.env.DB_URI || '',
  jwtSecret: process.env.JWT_SECRET || 'secret',
  mongoUri: process.env.MONGO_URI || 'mongodb://localhost:27017/zamele',
}; 