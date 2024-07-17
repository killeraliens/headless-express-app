import { Request, Response, NextFunction } from 'express';
import { logger } from '../../utils/logger'; // Adjust the import path if necessary

const requestLogger = (req: Request, res: Response, next: NextFunction) => {
  logger.info(`${req.method} ${req.originalUrl}`);
  next();
};

export { requestLogger };