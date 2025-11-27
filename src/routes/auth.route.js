import { Router } from "express";
import * as authController from "../controllers/auth.controller.js";
import validate from "../middleware/validate.middleware.js";
import { registerSchema, loginSchema } from "../validators/auth.validator.js";

const router = Router();

router.post("/register", validate(registerSchema), authController.register); // POST /api/auth/register
router.post("/login", validate(loginSchema), authController.login);         // POST /api/auth/login

export default router;
