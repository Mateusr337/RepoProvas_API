import * as errorFunctions from "../utils/errorFunctions.js";
import * as termRepository from "../repositories/termRepository.js";

export async function insert(name: number) {
  if (name < 1 || name > 15) throw errorFunctions.badRequestError("name");

  const term = await termRepository.insert(name.toString());
  return term;
}

export async function getAll() {
  const terms = await termRepository.getAll();
  return terms;
}
