import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import connectDB from './config/db.js';
import apiRoutes from './routes/api.js';

// Resolve directory paths for robust ES module env loading
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Pre-load environment variables from root
dotenv.config({ path: path.resolve(__dirname, '../.env') });
dotenv.config(); // Fallback to current working directory if run from root

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middlewares
app.use(cors({
  origin: ['http://localhost:5173', 'http://127.0.0.1:5173'],
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static assets or visual placeholders if required in production
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use('/api', apiRoutes);

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'UP', message: 'cGxP Tech API Gateway is online' });
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error(`Unhandled Error: ${err.message}`);
  res.status(500).json({
    message: 'An internal server error occurred.',
    error: process.env.NODE_ENV === 'development' ? err.message : {}
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`========================================`);
  console.log(`🚀 cGxP Tech API Server listening on: http://localhost:${PORT}`);
  console.log(`📦 Node Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`========================================`);
});
