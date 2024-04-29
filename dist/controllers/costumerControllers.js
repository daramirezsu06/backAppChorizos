"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCostumer = exports.updateCostumer = exports.getCostumers = exports.createCostumer = void 0;
const createCostumer = (req, res) => {
    res.send("createCostumer  vamos melos");
};
exports.createCostumer = createCostumer;
const getCostumers = (req, res) => {
    res.send("aoptendremos los clientes  vamos melos");
};
exports.getCostumers = getCostumers;
const updateCostumer = (req, res) => {
    res.send("acrualizamos los clientes  vamos melos");
};
exports.updateCostumer = updateCostumer;
const deleteCostumer = (req, res) => {
    res.send("eliminamos los clientes  vamos melos");
};
exports.deleteCostumer = deleteCostumer;
