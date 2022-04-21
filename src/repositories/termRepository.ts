import { terms } from "@prisma/client";
import client from "../database.js";

export async function insert(name: string) {
  const term = await client.terms.create({ data: { number: name } });
  return term;
}

export async function getAll() {
  const terms = await client.terms.findMany({});
  return terms;
}
