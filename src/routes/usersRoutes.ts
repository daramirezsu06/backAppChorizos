import { Router } from "express";
import { creteUser, getUsers } from "../controllers/userControllers";

const usersRoutes = Router();

usersRoutes.get("/", getUsers);

usersRoutes.put("/", creteUser);

export default usersRoutes;
