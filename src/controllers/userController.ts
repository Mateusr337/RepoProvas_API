import { Request, Response } from "express";
import * as userService from "../services/userService.js";

export async function register(req: Request, res: Response) {
  await userService.insert(req.body);

  res.sendStatus(201);
}
