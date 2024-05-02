import { AppDataSource } from "../config/data-source";
import { IProductDTO } from "../dto/productDto";
import { Product } from "../entities/Products";

const productModel = AppDataSource.getRepository(Product);

export const createProductsService = async (
  product: IProductDTO
): Promise<Product> => {
  const newProduct = productModel.create(product);
  await productModel.save(newProduct);
  return newProduct;
};

export const getProductsService = async (): Promise<Product[]> => {
  const products = await productModel.find();
  return products;
};
