import { Request, Response } from "express";

export const registerSale= (req: Request, res: Response) => {
    res.send("registerSale  vamos melos");
}

export const getSales = (req: Request, res: Response) => {
    res.send("aoptendremos las ventas  vamos melos");
}