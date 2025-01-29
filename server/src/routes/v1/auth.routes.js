import { Router } from "express";

const router = Router();

router.get("/", (req, res) =>
  res.json({ message: "Auth GET endpoint working!" })
);
router.post("/", (req, res) =>
  res.json({ message: "Auth POST endpoint working!" })
);

export default router;
