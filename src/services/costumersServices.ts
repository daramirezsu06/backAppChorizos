export const createCostumerService = async (costumer: ICostumerDTO) => {
    const id = arrayCostumers.length + 1;
    await arrayCostumers.push({ ...costumer, id });
    return arrayCostumers;
};