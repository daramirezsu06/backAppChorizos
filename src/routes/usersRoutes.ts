import { Router } from "express";
import { creteUser } from "../controllers/userControllers";

const usersRoutes = Router();

usersRoutes.put("/", creteUser);

export default usersRoutes;
