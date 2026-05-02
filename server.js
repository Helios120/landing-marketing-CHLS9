import express from "express";
import cors from "cors";
import { router as presaleRoutes } from "./routes/presale.js";
import { router as vestingRoutes } from "./routes/vesting.js";
import { router as liquidityRoutes } from "./routes/liquidity.js";
import { router as multisigRoutes } from "./routes/multisig.js";
import { router as statsRoutes } from "./routes/stats.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/presale", presaleRoutes);
app.use("/vesting", vestingRoutes);
app.use("/liquidity", liquidityRoutes);
app.use("/multisig", multisigRoutes);
app.use("/stats", statsRoutes);

app.listen(4000, () => console.log("API CHLS9 running on port 4000"));
