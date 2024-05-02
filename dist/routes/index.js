"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usersRoutes_1 = __importDefault(require("./usersRoutes"));
const salesRoutes_1 = __importDefault(require("./salesRoutes"));
const costumersRoutes_1 = __importDefault(require("./costumersRoutes"));
const productsRoutes_1 = __importDefault(require("./productsRoutes"));
const router = (0, express_1.Router)();
router.get("/", (req, res) => {
    res.send("Hello World");
});
router.use("/users", usersRoutes_1.default);
router.use("/sales", salesRoutes_1.default);
router.use("/costumers", costumersRoutes_1.default);
router.use("/products", productsRoutes_1.default);
exports.default = router;
