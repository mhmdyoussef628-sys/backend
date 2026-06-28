/**
 * Custom Error Class that extends the native Error object.
 * This allows us to pass custom HTTP status codes (like 404, 400, etc.)
 * along with our error messages.
 */
export class ErrorResponse extends Error {
  statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;

    // Captures the build stack trace for easier local debugging
    Error.captureStackTrace(this, this.constructor);
  }
}