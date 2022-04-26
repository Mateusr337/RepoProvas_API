import { Request, Response, Router } from "express";
import * as authController from "../controllers/authController.js";
import validateSchemaMiddleware from "../middlewares/validateSchemaMiddleware.js";
import userSchema from "../schemas/userSchema.js";

const authRouter = Router();

authRouter.post("/login", validateSchemaMiddleware(userSchema), authController.login);
authRouter.get("/token", authController.CreateToken);
authRouter.get("/validateAuth", authController.validateToken, (req: Request, res: Response) => {
  res.sendStatus(200);
});

export default authRouter;
