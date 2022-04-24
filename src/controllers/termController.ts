import { Request, Response } from "express";
import * as termService from "../services/termService.js";

export async function getAll(req: Request, res: Response) {
  const terms = await termService.getAll();
  res.send(terms);
}
