import * as userRepository from "../repositories/userRepository.js";
import * as userService from "../services/userService.js";
import * as encryptFunctions from "../utils/encryptFunction.js";
import jwt from "jsonwebtoken";
import * as authRepository from "../repositories/authRepository.js";
import * as errorFunctions from "../utils/errorFunctions.js";

export async function validateToken(token: string) {
  if (!token) errorFunctions.notFoundError("token");

  let data: authRepository.token;
  try {
    data = jwt.verify(token, process.env.JWT_SECRET);
  } catch {
    throw errorFunctions.unauthorizedError("token");
  }

  const session = await findSessionById(data.sessionId);
  const user = userService.findById(data.userId);

  return data.userId;
}

export async function login(data: userRepository.usersInsertData) {
  const user = (await userRepository.find({ email: data.email }))[0];

  await encryptFunctions.compareEncrypted(data.password, user.password);
  const session = await authRepository.insertSession(user.id);

  const expiration = { expiresIn: 60 * 60 * 24 * 30 };

  const token: string = jwt.sign(
    { userId: user.id, sessionId: session.id },
    process.env.JWT_SECRET,
    expiration
  );

  return token;
}

export async function findSessionById(id: number) {
  const session = await authRepository.findSessionsById(id);
  if (!session) throw errorFunctions.notFoundError("session");

  return session;
}

export async function loginWithGithub(email: string) {
  let user = (await userRepository.find({ email }))[0];
  if (!user) user = await userRepository.insert({ email, password: null });

  const session = await authRepository.insertSession(user.id);

  const expiration = { expiresIn: 60 * 60 * 24 * 30 };

  const token: string = jwt.sign(
    { userId: user.id, sessionId: session.id },
    process.env.JWT_SECRET,
    expiration
  );

  return token;
}
