import express from "express";
import {
  getStatus,
  addSale,
  getSales,
  resetPresale
} from "../controllers/presaleController.js";

export const router = express.Router();

router.get("/status", getStatus);
router.post("/sell", addSale);
router.get("/sales", getSales);
router.post("/reset", resetPresale);
