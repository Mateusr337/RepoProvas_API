import { teachers } from "@prisma/client";
import * as testsRepository from "../repositories/testsRepository.js";
import * as errorFunctions from "../utils/errorFunctions.js";
import * as termRepository from "../repositories/termRepository.js";
import * as categoryRepository from "../repositories/categoryRepository.js";
import * as teacherRepository from "../repositories/teacherRepository.js";
import * as disciplinesRepository from "../repositories/disciplineRepository.js";

export async function insert(data: testsRepository.InsertTestsData) {
  const termId = await validateTerm(data.term);
  let category = await validateCategory(data.category);
  let teacher = await teacherRepository.getByName(data.teacher);
  let discipline = await disciplinesRepository.getByName(data.discipline);

  if (!teacher) teacher = await teacherRepository.insert(data.teacher);
  if (!discipline)
    discipline = await disciplinesRepository.insert({ name: data.discipline, termId });
  if (!category) category = await categoryRepository.insert(data.category);

  let teachersDiscipline = await teacherRepository.getTeacherDisciplineByIds(
    teacher.id,
    discipline.id
  );
  if (!teachersDiscipline)
    teachersDiscipline = await teacherRepository.insertTeacherDiscipline(teacher.id, discipline.id);

  const formatData = {
    name: data.name,
    pdfUrl: data.pdfUrl,
    categoryId: category.id,
    teacherDisciplineId: teachersDiscipline.id,
  };

  const test = await testsRepository.insert(formatData);
  return test;
}

async function validateTerm(term: string) {
  const number = parseInt(term);
  if (number > 12 || number < 1) throw errorFunctions.badRequestError("term");

  const foundTerm = await termRepository.getByNumber(term);
  if (!foundTerm) throw errorFunctions.notFoundError("term");

  return foundTerm.id;
}

async function validateCategory(categoryName: string) {
  const categoryFormat = categoryName.trim();
  const category = await categoryRepository.getByName(categoryFormat);
  return category;
}
