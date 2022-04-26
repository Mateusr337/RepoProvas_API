import { Router } from "express";
import authRouter from "./authRouter.js";
import disciplinesRouter from "./disciplinesRouter.js";
import githubRouter from "./githubRouter.js";
import routerTeacher from "./teacherRouter.js";
import termRouter from "./termRouter.js";
import testsRouter from "./testsRouter.js";
import userRouter from "./userRouter.js";

const router = Router();

router.use(userRouter);
router.use(authRouter);
router.use(disciplinesRouter);
router.use(testsRouter);
router.use(routerTeacher);
router.use(termRouter);
router.use(githubRouter);

export default router;
