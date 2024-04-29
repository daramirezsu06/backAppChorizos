"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userControllers_1 = require("../controllers/userControllers");
const usersRoutes = (0, express_1.Router)();
usersRoutes.get("/", userControllers_1.getUsers);
usersRoutes.put("/", userControllers_1.creteUser);
exports.default = usersRoutes;
