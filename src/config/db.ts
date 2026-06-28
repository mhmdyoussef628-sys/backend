import mongoose from 'mongoose';

/**
 * Establishes a connection to the MongoDB database using Mongoose.
 * This is an asynchronous function because connecting to an external database 
 * requires waiting for network handshakes.
 */
export const connectDB = async (): Promise<void> => {
  try {
    // Grab our URI from the environment file
    const connStr = process.env.MONGODB_URI;

    if (!connStr) {
      throw new Error('MONGODB_URI is not defined inside your .env configuration file.');
    }

    // Attempt to connect to the database
    const conn = await mongoose.connect(connStr);

    console.log(`[database]: MongoDB connected successfully to host: ${conn.connection.host}`);
  } catch (error) {
    // If the connection fails, log why and terminate the process gracefully
    console.error(`[database error]: Database connection failed: ${(error as Error).message}`);
    process.exit(1); 
  }
};