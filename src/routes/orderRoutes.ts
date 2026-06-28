import { Router } from 'express';
import { createOrder, getOrders } from '../controllers/orderController';

const router = Router();

router.route('/').get(getOrders).post(createOrder);

export default router;