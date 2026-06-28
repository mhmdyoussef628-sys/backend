import { Schema, model, Document } from 'mongoose';

export interface IDriver extends Document {
  fullName: string;
  phoneNumber: string;
  isAvailable: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const DriverSchema = new Schema<IDriver>(
  {
    fullName: {
      type: String,
      required: [true, 'Driver name is required'],
      trim: true,
    },
    phoneNumber: {
      type: String,
      required: [true, 'Driver phone number is required'],
      trim: true,
    },
    isAvailable: {
      type: Boolean,
      default: true, // Drivers are available by default when created
    },
  },
  { timestamps: true }
);

export const Driver = model<IDriver>('Driver', DriverSchema);