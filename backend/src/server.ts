import app from './app';
import { PORT } from './config/env';
import { connectDB } from './utils/db';

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
});
