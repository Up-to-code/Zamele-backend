import express from 'express';
import config from './config/default';
import router from './routes';
import errorHandler from './middlewares/errorHandler';

envLoad();

const app = express();

app.use(express.json());
app.use('/api', router);
app.use(errorHandler);



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
