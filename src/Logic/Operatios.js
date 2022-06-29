//DEPERACADO debido a uso de la libreria MATH.js

const operatorInc = "+";
const operatorDec = "-";
const operatorMul = "*";
const operatorDiv = "/";

export const calculate = (operation) => {
  console.log(operation);
  let arrayOperations = operation.split(operatorInc | operatorDec);
  let operator = operation[1];
  let ope1 = parseFloat(arrayOperations[0]);
  let ope2 = parseFloat(arrayOperations[2]);

  console.log(ope1);
  console.log(ope2);
  console.log(operator);

  switch (operator) {
    case operatorInc:
      return Inte(ope1 + ope2);

    case operatorDec:
      return ope1 - ope2;

    case operatorMul:
      return ope1 * ope2;

    case operatorDiv:
      return ope1 / ope2;

    default:
      return "Error";
  }
};
