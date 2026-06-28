import { Router } from 'express';
import { createDriver, getDrivers } from '../controllers/driverController';

const router = Router();

router.route('/')
  .get(getDrivers)
  .post(createDriver);

export default router;