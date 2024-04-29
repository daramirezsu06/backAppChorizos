import { Router, Request, Response } from "express";
import usersRoutes from "./usersRoutes";
import salesRoutes from "./salesRoutes";
import costumerRoutes from "./costumersRoutes";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});
router.use("/users", usersRoutes);
router.use("/sales", salesRoutes);
router.use("/costumers", costumerRoutes);

export default router;
