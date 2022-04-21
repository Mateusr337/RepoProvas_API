import client from "../database.js";

export interface token {
  sessionId: number;
  userId: number;
  iat: number;
  exp: number;
}

export async function insertSession(userId: number) {
  const session = await client.sessions.create({ data: { userId } });
  return session;
}

export async function findSessionsById(id: number) {
  const session = await client.sessions.findUnique({
    where: { id },
  });
  return session;
}
