import { Router } from "express";
import * as termController from "../controllers/termController.js";
import { validateToken } from "../controllers/authController.js";

const termRouter = Router();

termRouter.get("/terms", validateToken, termController.getAll);

export default termRouter;
