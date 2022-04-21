import { Router } from "express";
import validateSchemaMiddleware from "../middlewares/validateSchemaMiddleware.js";
import termSchema from "../schemas/termSchema.js";
import * as termController from "../controllers/termController.js";
import { validateToken } from "../controllers/authController.js";

const termRouter = Router();

termRouter.post(
  "/terms",
  validateToken,
  validateSchemaMiddleware(termSchema),
  termController.insert
);
termRouter.get("/terms", validateToken, termController.getAll);

export default termRouter;
