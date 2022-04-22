import { Router } from "express";
import * as authController from "../controllers/authController.js";
import * as testsController from "../controllers/testsController.js";
import validateSchemaMiddleware from "../middlewares/validateSchemaMiddleware.js";
import testSchema from "../schemas/testSchema.js";

const testsRouter = Router();

testsRouter.post(
  "/tests",
  authController.validateToken,
  validateSchemaMiddleware(testSchema),
  testsController.insert
);

export default testsRouter;
