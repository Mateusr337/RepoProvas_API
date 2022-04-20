import * as userRepository from "../repositories/userRepository.js";
import * as encryptFunctions from "../utils/encryptFunction.js";
import jwt from "jsonwebtoken";
import * as authRepository from "../repositories/authRepository.js";

export async function login(data: userRepository.usersInsertData) {
  const user = (await userRepository.find({ email: data.email }))[0];

  await encryptFunctions.compareEncrypted(data.password, user.password);
  await authRepository.insertSession(user.id);
}
