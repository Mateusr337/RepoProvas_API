import { Router } from "express";
import { validateToken } from "../controllers/authController.js";
import validateSchemaMiddleware from "../middlewares/validateSchemaMiddleware.js";
import disciplineSchema from "../schemas/disciplineSchema.js";
import * as disciplinesController from "../controllers/disciplineController.js";

const disciplinesRouter = Router();

disciplinesRouter.post(
  "/discipline",
  validateToken,
  validateSchemaMiddleware(disciplineSchema),
  disciplinesController.insert
);

disciplinesRouter.get("/disciplines/:name", validateToken, disciplinesController.getByName);

export default disciplinesRouter;
