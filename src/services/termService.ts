import * as errorFunctions from "../utils/errorFunctions.js";
import * as termRepository from "../repositories/termRepository.js";

export async function getAll() {
  const terms = await termRepository.getAll();
  return terms;
}
