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
exports.deleteUser = exports.updateUser = exports.creteUser = exports.getUsers = void 0;
const usersServices_1 = require("../services/usersServices");
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield (0, usersServices_1.getUsersService)();
        res.json({ users });
    }
    catch (error) {
        res.send(`error ${error}`);
    }
});
exports.getUsers = getUsers;
const creteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, birthdate, cedula, role, userName, password } = req.body;
    try {
        const users = yield (0, usersServices_1.createUserService)({
            name,
            birthdate,
            role,
            cedula,
            userName,
            password,
        });
        res.json({ users });
    }
    catch (error) {
        res.send(`error ${error}`);
    }
});
exports.creteUser = creteUser;
const updateUser = (req, res) => {
    res.send("acrualizamos los usuarios  vamos melos");
};
exports.updateUser = updateUser;
const deleteUser = (req, res) => {
    res.send("eliminamos los usuarios  vamos melos");
};
exports.deleteUser = deleteUser;
