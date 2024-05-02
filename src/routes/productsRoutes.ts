import { Router } from "express";
import { createProduct } from "../controllers/productController";

const productsRoutes = Router();


productsRoutes.post("/", createProduct)

export default productsRoutes