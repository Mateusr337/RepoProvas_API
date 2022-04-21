import { users } from "@prisma/client";
import client from "../database.js";

export type usersInsertData = Omit<users, "id">;
export type usersPartial = Partial<users>;

export async function findById(id: number) {
  const user = await client.users.findUnique({
    where: { id },
  });
  return user;
}

export async function find(userData: usersPartial) {
  const users = await client.users.findMany({
    where: { ...userData },
  });
  return users;
}

export async function insert(data: usersInsertData) {
  await client.users.create({ data });
}
