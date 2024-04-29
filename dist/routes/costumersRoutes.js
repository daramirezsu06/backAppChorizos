"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const costumerControllers_1 = require("../controllers/costumerControllers");
const costumerRoutes = (0, express_1.Router)();
costumerRoutes.post("/", costumerControllers_1.createCostumer);
exports.default = costumerRoutes;
