import { Request, Response } from "express";
import * as termService from "../services/termService.js";

export async function insert(req: Request, res: Response) {
  const { name } = req.body;

  const term = await termService.insert(name);

  res.status(201).send(term);
}

export async function getAll(req: Request, res: Response) {
  const terms = await termService.getAll();
  res.send(terms);
}
