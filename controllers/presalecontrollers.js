import fs from "fs";
import { CONFIG } from "../config.js";

const db = JSON.parse(fs.readFileSync("./db.json"));

export function getStatus(req, res) {
  const raised = db.sales.length * CONFIG.presalePrice;
  res.json({
    target: CONFIG.presaleTarget,
    raised,
    allocations: db.sales.length,
    remaining: CONFIG.presaleAllocations - db.sales.length
  });
}

export function addSale(req, res) {
  const { wallet, amount } = req.body;

  if (db.sales.length >= CONFIG.presaleAllocations)
    return res.status(400).json({ error: "Pre-sale complète" });

  db.sales.push({ wallet, amount, date: Date.now() });
  fs.writeFileSync("./db.json", JSON.stringify(db, null, 2));

  res.json({ success: true });
}

export function getSales(req, res) {
  res.json(db.sales);
}

export function resetPresale(req, res) {
  db.sales = [];
  fs.writeFileSync("./db.json", JSON.stringify(db, null, 2));
  res.json({ success: true });
}
