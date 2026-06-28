import { Schema, model, Document, Types } from 'mongoose';

export interface IMenuItem extends Document {
  restaurantId: Types.ObjectId;
  itemName: string;
  price: number;
  createdAt: Date;
  updatedAt: Date;
}

const MenuItemSchema = new Schema<IMenuItem>(
  {
    restaurantId: {
      type: Schema.Types.ObjectId,
      ref: 'Restaurant', // Connects this item to a specific Restaurant document
      required: [true, 'A menu item must belong to a restaurant'],
    },
    itemName: {
      type: String,
      required: [true, 'Item name is required'],
      trim: true,
    },
    price: {
      type: Number,
      required: [true, 'Price is required'],
      min: [0, 'Price cannot be negative'],
    },
  },
  { timestamps: true }
);

export const MenuItem = model<IMenuItem>('MenuItem', MenuItemSchema);