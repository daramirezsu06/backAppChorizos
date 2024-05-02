import { Router, Request, Response } from "express";
import usersRoutes from "./usersRoutes";
import salesRoutes from "./salesRoutes";
import costumerRoutes from "./costumersRoutes";
import productsRoutes from "./productsRoutes";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});
router.use("/users", usersRoutes);
router.use("/sales", salesRoutes);
router.use("/costumers", costumerRoutes);
router.use("/products", productsRoutes);

export default router;
