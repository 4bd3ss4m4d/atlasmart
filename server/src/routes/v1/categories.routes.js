import { Router } from "express";

const router = Router();

router.get("/", (req, res) =>
  res.json({ message: "Category GET endpoint working!" })
);
router.post("/", (req, res) =>
  res.json({ message: "Category POST endpoint working!" })
);

export default router;
