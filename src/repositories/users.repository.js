import fileStore from "../models/fileStore.js";
const FILE = "users.json";

export const getAll = async () => {
  const data = await fileStore.readJson(FILE);
  return data.users || [];
};

export const saveAll = async (users) => {
  await fileStore.writeJson(FILE, { users });
};

export const findByUsername = async (username) => {
  const users = await getAll();
  return users.find(u => u.username === username) || null;
};

export const createUser = async (user) => {
  const users = await getAll();
  users.push(user);
  await saveAll(users);
  return user;
};
