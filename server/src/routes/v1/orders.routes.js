import { Router } from "express";

const router = Router();

router.get("/", (req, res) =>
  res.json({ message: "Order GET endpoint working!" })
);
router.post("/", (req, res) =>
  res.json({ message: "Order POST endpoint working!" })
);

export default router;
