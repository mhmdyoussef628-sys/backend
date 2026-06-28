import { Request, Response, NextFunction } from 'express';
import { Order } from '../models/Order';

export const createOrder = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const order = await Order.create(req.body);
    res.status(201).json({ success: true, data: order });
  } catch (error) {
    next(error);
  }
};

export const getOrders = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const orders = await Order.find()
      .populate('customerId', 'fullName phoneNumber')
      .populate('restaurantId', 'restaurantName')
      .populate('driverId', 'fullName phoneNumber');

    res.status(200).json({ success: true, count: orders.length, data: orders });
  } catch (error) {
    next(error);
  }
};