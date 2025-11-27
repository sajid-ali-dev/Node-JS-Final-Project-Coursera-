import express from "express";
import helmet from "helmet";
import cors from "cors";
import rateLimit from "express-rate-limit";
import "express-async-errors";
import routes from "./routes/index.js";
import errorHandler from "./middleware/error.middleware.js";
import config from "./config/index.js";

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use(
  rateLimit({
    windowMs: config.rateLimitWindowMs,
    max: config.rateLimitMax,
    standardHeaders: true,
    legacyHeaders: false
  })
);

// Mount API routes
app.use("/api", routes);

// Healthcheck
app.get("/health", (req, res) => res.json({ status: "ok" }));

// Error handler (must be last)
app.use(errorHandler);

export default app;
