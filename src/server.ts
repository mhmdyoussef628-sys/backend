import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db';
import { errorHandler } from './middleware/errorHandler';
import customerRoutes from './routes/customerRoutes';
import restaurantRoutes from './routes/restaurantRoutes';
import driverRoutes from './routes/driverRoutes';
import menuItemRoutes from './routes/menuItemRoutes'; // 1. Add this import
import orderRoutes from './routes/orderRoutes';       // 2. Add this import

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(express.json());

// Mount All 5 Routers
app.use('/api/v1/customers', customerRoutes);
app.use('/api/v1/restaurants', restaurantRoutes);
app.use('/api/v1/drivers', driverRoutes);
app.use('/api/v1/menuitems', menuItemRoutes); // 3. Mount this route
app.use('/api/v1/orders', orderRoutes);       // 4. Mount this route

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: 'Welcome to the BiteRoute API v1 Core Server!'
  });
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`[server]: Server is running securely on http://localhost:${PORT}`);
});