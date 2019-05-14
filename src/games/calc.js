import main from '..';
import getRandomNumber from '../utils';

const expression = (number1, number2, random) => {
  switch (random) {
    case 1:
      return [number1 + number2, `${number1} + ${number2}`];
    case 2:
      return [number1 - number2, `${number1} - ${number2}`];
    default:
      return [number1 * number2, `${number1} * ${number2}`];
  }
};

const calc = () => {
  const firstNumber = getRandomNumber(1, 100);
  const secondNumber = getRandomNumber(1, 100);
  const operator = getRandomNumber(1, 3);

  const [answer, question] = expression(firstNumber, secondNumber, operator);
  const result = [answer, question];
  return result;
};

const description = 'What is the result of the expression?';

const start = () => {
  main(description, calc);
};

export default start;
