import { Request, Response } from "express";
import * as disciplineService from "../services/disciplineService.js";

export async function insert(req: Request, res: Response) {
  const { term, name } = req.body;

  const discipline = await disciplineService.insert(term, name);
  res.status(201).send(discipline);
}

export async function getByName(req: Request, res: Response) {
  const { name } = req.params;
  const disciplines = await disciplineService.getByName(name);
  res.status(200).send(disciplines);
}
