enum typeOfCostumer {
  tienda = "tienda",
  minimercado = "minimercado",
  supermercado = "supermercado",
  grandeSuperficie = "grande superficie",
  distribuidora = "distribuidora",
  personaNatural = "persona natural",
}

export const arrayCostumers = [
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
