import client from "../database.js";

export async function insertSession(userId: number) {
  const result = await client.sessions.create({ data: { userId } });
  console.log(result);
}
