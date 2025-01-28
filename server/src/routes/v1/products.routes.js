import { Router } from "express";

const router = Router();

router.get("/", (req, res) =>
  res.json({ message: "Product GET endpoint working!" })
);
router.post("/", (req, res) =>
  res.json({ message: "Product POST endpoint working!" })
);

export default router;
