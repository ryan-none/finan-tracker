import { Request, Response, NextFunction } from 'express';

export function errorHandler(err: any, req: Request, res: Response, next: NextFunction) {
  // Prevent leaking sensitive errors
  const status = err.status || 500;
  const message = status === 500 ? 'Internal server error' : err.message;
  res.status(status).json({ success: false, message });
}
