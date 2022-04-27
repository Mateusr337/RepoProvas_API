import { Request, Response } from "express";
import * as teacherService from "../services/teacherService.js";

export async function insert(req: Request, res: Response) {
  const teacher = await teacherService.insert(req.body);
  res.status(201).send(teacher);
}

export async function getAll(req: Request, res: Response) {
  const teachers = await teacherService.getAll();
  res.send(teachers);
}

export async function getByName(req: Request, res: Response) {
  const { name } = req.params;

  const teachers = await teacherService.getByName(name);
  res.send(teachers);
}
