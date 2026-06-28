import { Schema, model, Document } from 'mongoose';

/**
 * 1. THE TYPESCRIPT INTERFACE
 * This defines the compile-time type safety for our application.
 * Extending 'Document' ensures it inherits standard Mongoose document properties like '_id'.
 */
export interface ICustomer extends Document {
  fullName: string;
  phoneNumber: string;
  address: string;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * 2. THE MONGOOSE SCHEMA
 * This enforces runtime data validation rules inside MongoDB.
 */
const CustomerSchema = new Schema<ICustomer>(
  {
    fullName: {
      type: String,
      required: [true, 'Full name is required'],
      trim: true, // Automatically removes accidental leading/trailing spaces
    },
    phoneNumber: {
      type: String,
      required: [true, 'Phone number is required'],
      trim: true,
    },
    address: {
      type: String,
      required: [true, 'Delivery address is required'],
      trim: true,
    },
  },
  {
    // Automatically handles 'createdAt' and 'updatedAt' timestamps for us!
    timestamps: true, 
  }
);

/**
 * 3. THE MODEL EXPORT
 * This provides the interface to interact with the 'customers' collection (CRUD operations).
 */
export const Customer = model<ICustomer>('Customer', CustomerSchema);