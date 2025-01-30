import { Router } from "express";

const router = Router();

router.get("/", (req, res) =>
  res.json({ message: "Cart GET endpoint working!" })
);
router.post("/", (req, res) =>
  res.json({ message: "Cart POST endpoint working!" })
);

export default router;
