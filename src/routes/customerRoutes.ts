import { Router } from 'express';
import { createCustomer, getCustomers } from '../controllers/customerController';

const router = Router();

// Map routes to controller actions
router.route('/')
  .get(getCustomers)
  .post(createCustomer);

export default router;