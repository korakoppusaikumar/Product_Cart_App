import express from 'express';
import cors from 'cors';
import productRoutes from './routes/product.routes';
const productsApi = require('./routes/productsApi');
import authRoutes from './routes/auth.routes';

const app: express.Application = express();
app.use(cors());
app.use(express.json());

// Health check endpoint for frontend-backend connectivity
app.get('/api/health', (req, res) => {
  res.send('Backend API is running!');
});

app.use('/products', productsApi);
app.use('/auth', authRoutes);

app.use((err: any, req: any, res: any, next: any) => {
  console.error(err);
  res.status(500).json({ message: 'Internal Server Error' });
});

export default app;
