import { Router } from "express";

const router = Router();

router.get("/", (req, res) =>
  res.json({ message: "User GET endpoint working!" })
);
router.post("/", (req, res) =>
  res.json({ message: "User POST endpoint working!" })
);

export default router;
