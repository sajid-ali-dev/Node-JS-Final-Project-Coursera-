import * as usersService from "../services/users.service.js";

export const register = async (req, res) => {
  const { username, password } = req.body;
  const user = await usersService.register(username, password);
  return res.status(201).json({ message: "Registered", user });
};

export const login = async (req, res) => {
  const { username, password } = req.body;
  const result = await usersService.login(username, password);
  return res.json({ message: "Login successful", ...result });
};
