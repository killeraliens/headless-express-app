import express, { Request, Response, Application, NextFunction } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import { logger, requestLogger } from './utils';
import { authRoutes, databricksRoutes } from './api/routes';

dotenv.config();

if (!process.env.PORT) {
  logger.error('PORT environment variable is not set.');
  process.exit(1);
}

const app: Application = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(requestLogger); // Log each request

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World');
});

app.use('/api', authRoutes);
app.use('/api', databricksRoutes);

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  logger.error(err.stack);
  res.status(500).send('Something broke!');
});

const server = app.listen(port, () => {
  logger.info(`Server running on port ${port}`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  logger.info('SIGTERM signal received: closing HTTP server');
  server.close(() => {
    logger.info('HTTP server closed');
  });
});

process.on('SIGINT', () => {
  logger.info('SIGINT signal received: closing HTTP server');
  server.close(() => {
    logger.info('HTTP server closed');
  });
});