import { Router } from "express";
import * as authController from "../controllers/authController.js";
import validateSchemaMiddleware from "../middlewares/validateSchemaMiddleware.js";
import userSchema from "../schemas/userSchema.js";

const authRouter = Router();

authRouter.post("/login", validateSchemaMiddleware(userSchema), authController.login);

export default authRouter;
