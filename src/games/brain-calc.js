import main from '..';

const expression = (number1, number2, random) => {
  if (random === 1) {
    return number1 + number2;
  }
  if (random === 2) {
    return number1 - number2;
  }
  return number1 * number2;
};

const expressionString = (number1, number2, random) => {
  if (random === 1) {
    return `${number1} + ${number2}`;
  }
  if (random === 2) {
    return `${number1} - ${number2}`;
  }
  return `${number1} * ${number2}`;
};

const calc = () => {
  const firstNumber = Math.floor(Math.random() * 100 + 1);
  const secondNumber = Math.floor(Math.random() * 100 + 1);
  const random = Math.floor(Math.random() * 3 + 1);

  const result = [expression(firstNumber, secondNumber, random),
    expressionString(firstNumber, secondNumber, random)];
  return result;
};

export default calc;
export const rules = 'What is the result of the expression?';

export const start = () => {
  main(rules, calc);
};
