import { Request, Response } from "express";
import * as authService from "../services/authService.js";

export async function login(req: Request, res: Response) {
  await authService.login(req.body);
  res.sendStatus(201);
}
