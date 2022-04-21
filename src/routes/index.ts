import { Router } from "express";
import authRouter from "./authRouter.js";
import termRouter from "./termRouter.js";
import userRouter from "./userRouter.js";

const router = Router();

router.use(userRouter);
router.use(authRouter);
router.use(termRouter);

export default router;
