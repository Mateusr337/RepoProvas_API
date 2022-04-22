import { Request, Response } from "express";
import * as teacherService from "../services/teacherService.js";

export async function insert(req: Request, res: Response) {
  const teacher = await teacherService.insert(req.body);
  res.status(201).send(teacher);
}
