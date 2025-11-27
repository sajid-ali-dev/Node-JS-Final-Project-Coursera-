import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import config from "../config/index.js";
import * as usersRepo from "../repositories/users.repository.js";

export const register = async (username, password) => {
  const existing = await usersRepo.findByUsername(username);
  if (existing) throw { status: 400, message: "Username already exists" };
  const hash = await bcrypt.hash(password, 10);
  const user = { username, password: hash };
  await usersRepo.createUser(user);
  return { username };
};

export const login = async (username, password) => {
  const user = await usersRepo.findByUsername(username);
  if (!user) throw { status: 400, message: "Invalid credentials" };
  const ok = await bcrypt.compare(password, user.password);
  if (!ok) throw { status: 400, message: "Invalid credentials" };
  const token = jwt.sign({ username }, config.jwtSecret, { expiresIn: config.jwtExpiresIn });
  return { token };
};
