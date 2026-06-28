import { Router } from 'express';
import { createMenuItem, getMenuItems } from '../controllers/menuItemController';

const router = Router();

router.route('/').get(getMenuItems).post(createMenuItem);

export default router;