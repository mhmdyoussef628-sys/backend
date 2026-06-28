import { Schema, model, Document, Types } from 'mongoose';

// Interface for the embedded items array (old order_details layout)
interface IOrderItems {
  menuItemId: Types.ObjectId;
  quantity: number;
  pricePerUnit: number;
}

export interface IOrder extends Document {
  customerId: Types.ObjectId;
  restaurantId: Types.ObjectId;
  driverId?: Types.ObjectId; // Optional because an order might not have a driver assigned yet
  items: IOrderItems[];       // Embedded sub-document array
  totalCost: number;
  deliveryFees: number;
  orderStatus: string;
  createdAt: Date;
  updatedAt: Date;
}

const OrderSchema = new Schema<IOrder>(
  {
    customerId: {
      type: Schema.Types.ObjectId,
      ref: 'Customer',
      required: [true, 'An order must be linked to a customer'],
    },
    restaurantId: {
      type: Schema.Types.ObjectId,
      ref: 'Restaurant',
      required: [true, 'An order must be linked to a restaurant'],
    },
    driverId: {
      type: Schema.Types.ObjectId,
      ref: 'Driver',
    },
    items: [
      {
        menuItemId: { type: Schema.Types.ObjectId, ref: 'MenuItem', required: true },
        quantity: { type: Number, required: true, min: [1, 'Quantity must be at least 1'] },
        pricePerUnit: { type: Number, required: true },
      }
    ],
    totalCost: {
      type: Number,
      required: true,
      default: 0,
    },
    deliveryFees: {
      type: Number,
      required: true,
      default: 0,
    },
    orderStatus: {
      type: String,
      required: true,
      enum: ['Pending', 'Preparing', 'Out for Delivery', 'Delivered', 'Cancelled'],
      default: 'Pending',
    },
  },
  { timestamps: true }
);

export const Order = model<IOrder>('Order', OrderSchema);