import { Router } from "express";

const router = Router();

router.get('kpi', async (req, res) => {
  try {
    const kpis = await KPI.find();

  } catch (error) {
    res.status(404).json({ message: error.message })
  }
});

export default router;
