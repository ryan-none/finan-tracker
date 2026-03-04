import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes';
import { errorHandler } from './middleware/errorHandler';
import { logger } from './middleware/logger';
import { loginLimiter } from './middleware/rateLimiter';
import { authenticateToken } from './middleware/authMiddleware';

dotenv.config();

const app = express();
app.use(express.json());
app.use(logger);

// Auth routes
app.use('/api/auth',loginLimiter, authRoutes);

// protected route
app.get('/api/protected', authenticateToken, (req, res) => {
  res.json({ success: true, message: 'Protected content', user: (req as any).user });
});

app.use(errorHandler);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
