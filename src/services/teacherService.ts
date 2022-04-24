import * as teacherRepository from "./../repositories/teacherRepository.js";
import * as errorFunctions from "../utils/errorFunctions.js";

export async function insert(data: teacherRepository.insertTeacherData) {
  const nameLowerCase = data.name.toLowerCase();

  const teacher = await teacherRepository.getByName(nameLowerCase);
  if (teacher) throw errorFunctions.conflictRequestError("Teacher name");

  const teacherInsert = await teacherRepository.insert(nameLowerCase);
  return teacherInsert;
}

export async function getAll() {
  const teachers = await teacherRepository.getAllTeachers();
  return teachers;
}
