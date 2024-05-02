import { Request, Response } from "express";
import { IProductDTO } from "../dto/productDto";
import {
  createProductsService,
  getProductsService,
} from "../services/productServices";
import { log } from "console";

export const createProduct = async (req: Request, res: Response) => {
  try {
    const product: IProductDTO = req.body;
    const newProduct = await createProductsService(product);
    res.status(200).json(newProduct);
  } catch (error) {
    log("hubo un error");
    res.status(500).json(error);
  }
};

export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await getProductsService();
    res.json(products);
  } catch (error) {
    res.send(`error ${error}`);
  }
};
