import { Request, Response } from "express";
import * as testsService from "../services/testsService.js";

export async function insert(req: Request, res: Response) {
  await testsService.insert(req.body);

  res.sendStatus(201);
}
