// Auth middleware stub
import { Request, Response, NextFunction } from 'express';

export function authMiddleware(req: Request, res: Response, next: NextFunction) {
  // TODO: Implement JWT auth
  next();
}
