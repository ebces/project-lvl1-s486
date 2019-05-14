import main from '..';
import randomNumber from '../utils';

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
  const firstNumber = randomNumber(1, 100);
  const secondNumber = randomNumber(1, 100);
  const operator = randomNumber(1, 3);

  const question = expression(firstNumber, secondNumber, operator);
  const result = [question[0], question[1]];
  return result;
};

const description = 'What is the result of the expression?';

const star = () => {
  main(description, calc);
};

export default star;
