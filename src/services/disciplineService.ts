import * as disciplineRepository from "../repositories/disciplineRepository.js";
import * as errorFunction from "../utils/errorFunctions.js";
import * as termRepository from "../repositories/termRepository.js";

export async function insert(termNumber: string, name: string) {
  const discipline = await disciplineRepository.getByName(name);
  if (discipline) throw errorFunction.conflictRequestError("discipline name");

  const term = await termRepository.getByNumber(termNumber);
  if (!term) throw errorFunction.notFoundError("term");

  const data = {
    termId: term.id,
    name,
  };

  const disciplineInsert = await disciplineRepository.insert(data);
  return disciplineInsert;
}
