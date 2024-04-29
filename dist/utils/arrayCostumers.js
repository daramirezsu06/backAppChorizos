"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayCostumers = void 0;
var typeOfCostumer;
(function (typeOfCostumer) {
    typeOfCostumer["tienda"] = "tienda";
    typeOfCostumer["minimercado"] = "minimercado";
    typeOfCostumer["supermercado"] = "supermercado";
    typeOfCostumer["grandeSuperficie"] = "grande superficie";
    typeOfCostumer["distribuidora"] = "distribuidora";
    typeOfCostumer["personaNatural"] = "persona natural";
})(typeOfCostumer || (typeOfCostumer = {}));
exports.arrayCostumers = [
    {
        id: 1,
        name: "david",
        nit: "123456789",
        creationDate: "2022-01-01",
        typeOfCostumer: typeOfCostumer.grandeSuperficie,
        location: "santa marta",
        pricesId: 1,
        contactInfo: {
            name: "david",
            phoneNumber: 123456789,
            role: "comprador"
        }
    },
];
