import { Request, Response, NextFunction } from 'express';
import { Driver } from '../models/Driver';

export const createDriver = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const driver = await Driver.create(req.body);
    res.status(201).json({ success: true, data: driver });
  } catch (error) {
    next(error);
  }
};

export const getDrivers = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const drivers = await Driver.find();
    res.status(200).json({ success: true, count: drivers.length, data: drivers });
  } catch (error) {
    next(error);
  }
};