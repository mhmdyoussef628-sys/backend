import { Request, Response, NextFunction } from 'express';
import { Customer } from '../models/Customer';
import { ErrorResponse } from '../middleware/ErrorResponse';

/**
 * @desc    Create a new customer
 * @route   POST /api/v1/customers
 */
export const createCustomer = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { fullName, phoneNumber, address } = req.body;

    const customer = await Customer.create({ fullName, phoneNumber, address });

    res.status(201).json({
      success: true,
      data: customer,
    });
  } catch (error) {
    next(error); // Sends the error to our global errorHandler middleware!
  }
};

/**
 * @desc    Get all customers
 * @route   GET /api/v1/customers
 */
export const getCustomers = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const customers = await Customer.find();
    res.status(200).json({
      success: true,
      count: customers.length,
      data: customers,
    });
  } catch (error) {
    next(error);
  }
};