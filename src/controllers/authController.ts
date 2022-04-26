import { NextFunction, Request, Response } from "express";
import * as authService from "../services/authService.js";

export async function login(req: Request, res: Response) {
  const token = await authService.login(req.body);
  res.send(token);
}

export async function validateToken(req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers;

  const token = authorization?.replace("Bearer ", "");

  const userId = await authService.validateToken(token);
  res.locals.userId = userId;
  next();
}

export async function loginWithGithub(req: Request, res: Response) {
  const { email } = req.body;

  const token = await authService.loginWithGithub(email);
  res.send(token);
}
