import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

import { AppError } from '../../../errors/AppError';

interface IPayload {
  sub: string;
}

export function ensureAuthenticated(
  request: Request,
  _: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError('Token missing', 401);
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded = verify(
      token,
      process.env.JWT_SECRET as string
    ) as IPayload;

    request.user = {
      id: decoded.sub,
    };

    next();
  } catch {
    throw new AppError('Invalid token', 401);
  }
}