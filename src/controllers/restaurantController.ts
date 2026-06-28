import { Request, Response, NextFunction } from 'express';
import { Restaurant } from '../models/Restaurant';
import { ErrorResponse } from '../middleware/ErrorResponse';

export const createRestaurant = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const restaurant = await Restaurant.create(req.body);
    res.status(201).json({ success: true, data: restaurant });
  } catch (error) {
    next(error);
  }
};

export const getRestaurants = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const restaurants = await Restaurant.find();
    res.status(200).json({ success: true, count: restaurants.length, data: restaurants });
  } catch (error) {
    next(error);
  }
};