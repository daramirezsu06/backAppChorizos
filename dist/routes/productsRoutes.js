"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productController_1 = require("../controllers/productController");
const productsRoutes = (0, express_1.Router)();
productsRoutes.post("/", productController_1.createProduct);
exports.default = productsRoutes;
