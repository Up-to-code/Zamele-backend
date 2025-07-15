import express from 'express';
import config from './config/default';
import router from './routes';
import errorHandler from './middlewares/errorHandler';
import mongoose from 'mongoose';

envLoad();

const app = express();

app.use(express.json());
app.use('/api', router);
app.use(errorHandler);

mongoose.connect(config.mongoUri)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });

const port = config.port;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

function envLoad() {
  // Load .env if not already loaded
  if (!process.env.PORT) {
    try {
      require('dotenv').config();
    } catch (e) {
      // dotenv not installed
    }
  }
}
