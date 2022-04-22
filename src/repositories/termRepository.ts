import client from "../database.js";

export async function getByNumber(number: string) {
  const term = await client.terms.findUnique({ where: { number } });
  return term;
}
