import { Router } from "express";
import { validateToken } from "../controllers/authController.js";
import validateSchemaMiddleware from "../middlewares/validateSchemaMiddleware.js";
import nameSchema from "../schemas/nameSchema.js";
import * as teacherController from "../controllers/teacherController.js";

const routerTeacher = Router();

routerTeacher.post(
  "/teacher",
  validateToken,
  validateSchemaMiddleware(nameSchema),
  teacherController.insert
);

export default routerTeacher;
