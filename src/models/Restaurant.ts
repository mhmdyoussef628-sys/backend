import { Schema, model, Document } from 'mongoose';

export interface IRestaurant extends Document {
  restaurantName: string;
  description?: string; // Optional description field mapping to 'menu text' in SQL
  createdAt: Date;
  updatedAt: Date;
}

const RestaurantSchema = new Schema<IRestaurant>(
  {
    restaurantName: {
      type: String,
      required: [true, 'Restaurant name is required'],
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

export const Restaurant = model<IRestaurant>('Restaurant', RestaurantSchema);