import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import kpiRoutes from './routes/kpi.js';
import productRoutes from './routes/product.js';
import Product from './models/Product.js';
import KPI from './models/KPI.js';
import { kpis, products } from './db/data.js';

dotenv.config();
const app = express();

app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));
app.use(morgan('common'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// ROUTES

app.use('/kpi', kpiRoutes);
app.use('/product', productRoutes);

// MONGO SETUP

const PORT = process.env.PORT || 5000;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));

    // await mongoose.connection.dropDatabase();
    // KPI.insertMany(kpis);
    // Product.insertMany(products);
  })
  .catch((error) => console.log(`${error} did not connect`));

