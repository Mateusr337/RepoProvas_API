import * as userRepository from "../repositories/userRepository.js";
import * as errorFunctions from "../utils/errorFunctions.js";
import * as encryptFunctions from "../utils/encryptFunction.js";

export async function insert(signUpData: userRepository.usersInsertData) {
  const existUser = await userRepository.find({ email: signUpData.email });
  if (existUser.length > 0) throw errorFunctions.conflictRequestError("email");

  signUpData.password = encryptFunctions.encryptData(signUpData.password);

  await userRepository.insert(signUpData);
}

export async function findById(id: number) {
  const user = await userRepository.findById(id);
  if (!user) throw errorFunctions.notFoundError("id");

  return user;
}
