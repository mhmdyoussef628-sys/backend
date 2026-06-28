import { Request, Response, NextFunction } from 'express';
import { MenuItem } from '../models/MenuItem';

export const createMenuItem = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const menuItem = await MenuItem.create(req.body);
    res.status(201).json({ success: true, data: menuItem });
  } catch (error) {
    next(error);
  }
};

export const getMenuItems = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const menuItems = await MenuItem.find().populate('restaurantId', 'restaurantName');
    res.status(200).json({ success: true, count: menuItems.length, data: menuItems });
  } catch (error) {
    next(error);
  }
};