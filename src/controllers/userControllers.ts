import { Request, Response } from "express";
import { createUserService, getUsersService } from "../services/usersServices";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await getUsersService();
    res.json({ users });
  } catch (error) {
    res.send(`error ${error}`);
  }
};
export const creteUser = async (req: Request, res: Response) => {
  const { name, birthdate, cedula, role, userName, password } = req.body;
  try {
    const users = await createUserService({
      name,
      birthdate,
      role,
      cedula,
      userName,
      password,
    });

    res.json({ users });
  } catch (error) {
    res.send(`error ${error}`);
  }
};
export const updateUser = (req: Request, res: Response) => {
  res.send("acrualizamos los usuarios  vamos melos");
};
export const deleteUser = (req: Request, res: Response) => {
  res.send("eliminamos los usuarios  vamos melos");
};
