import exp from "constants";
import { Router } from "express";
import { createCostumer } from "../controllers/costumerControllers";

const costumerRoutes = Router();

costumerRoutes.get("/", createCostumer);

export default costumerRoutes;
