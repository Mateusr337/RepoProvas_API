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

routerTeacher.get("/teachers", validateToken, teacherController.getAll);
routerTeacher.get("/teachers/:name", validateToken, teacherController.getByName);

export default routerTeacher;
