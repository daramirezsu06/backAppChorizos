"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductsService = exports.createProductsService = void 0;
const data_source_1 = require("../config/data-source");
const Products_1 = require("../entities/Products");
const productModel = data_source_1.AppDataSource.getRepository(Products_1.Product);
const createProductsService = (product) => __awaiter(void 0, void 0, void 0, function* () {
    const newProduct = productModel.create(product);
    yield productModel.save(newProduct);
    return newProduct;
});
exports.createProductsService = createProductsService;
const getProductsService = () => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield productModel.find();
    return products;
});
exports.getProductsService = getProductsService;
