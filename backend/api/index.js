import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from '../config/db.js';
import authRoutes from './auth.js';
import productRoutes from './products.js';

dotenv.config();

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);

app.get('/api', (req, res) => {
  res.json({ message: 'API is running' });
});

// Export for Vercel
export default app;

// Local development
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});