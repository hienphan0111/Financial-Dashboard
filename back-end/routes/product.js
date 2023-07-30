import { Router } from "express";
import Product from "../models/KPI.js";

const router = Router();

router.get('/product', async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
});

export default router;
