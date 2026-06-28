import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';
import { ErrorResponse } from './ErrorResponse';

export const errorHandler: ErrorRequestHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  let error = { ...err };
  error.message = err.message;

  // Log the complete error to the console for the developer to see
  console.error(`[api error log]:`, err);

  // Mongoose Bad ObjectId Error (e.g., trying to fetch a Customer with an invalid ID format)
  if (err.name === 'CastError') {
    const message = `Resource not found with id of ${err.value}`;
    error = new ErrorResponse(message, 404);
  }

  // Mongoose Validation Error (e.g., leaving a required field empty)
  if (err.name === 'ValidationError') {
    const message = Object.values(err.errors).map((val: any) => val.message).join(', ');
    error = new ErrorResponse(message, 400);
  }

  // Fallback if no specific code is set (Default: 500 Internal Server Error)
  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || 'Server Error'
  });
};