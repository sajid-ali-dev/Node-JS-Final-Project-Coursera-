import { Router } from "express";
import booksRoutes from "./books.route.js";
import authRoutes from "./auth.route.js";

const router = Router();

router.use("/books", booksRoutes);
router.use("/auth", authRoutes);

export default router;
