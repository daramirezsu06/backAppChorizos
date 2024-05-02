import { Request, Response } from "express";

export const createCostumer = (req: Request, res: Response) => {
  req.body;
  res.send("createCostumer  vamos melos");
};
export const getCostumers = (req: Request, res: Response) => {
  res.send("aoptendremos los clientes  vamos melos");
};

export const updateCostumer = (req: Request, res: Response) => {
  res.send("acrualizamos los clientes  vamos melos");
};

export const deleteCostumer = (req: Request, res: Response) => {
  res.send("eliminamos los clientes  vamos melos");
};
