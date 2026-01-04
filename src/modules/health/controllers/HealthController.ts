import { Request, Response } from 'express';

export class HealthController {
  public index(request: Request, response: Response): Response {
    return response.status(200).json({
      status: 'ok',
    });
  }
}