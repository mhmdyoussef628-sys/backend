import { Router } from 'express';
import { createRestaurant, getRestaurants } from '../controllers/restaurantController';

const router = Router();

router.route('/')
  .get(getRestaurants)
  .post(createRestaurant);

export default router;