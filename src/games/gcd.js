import main from '..';
import getRandomNumber from '../utils';

const getDivisor = (number1, number2) => {
  let answer = Math.min(number1, number2);
  while (!(number1 % answer === 0 && number2 % answer === 0)) {
    answer -= 1;
  }
  return answer;
};

const nod = () => {
  const firstNumber = getRandomNumber(1, 100);
  const secondNumber = getRandomNumber(1, 100);
  const answer = getDivisor(firstNumber, secondNumber);
  const result = [`${answer}`, `${firstNumber} ${secondNumber}`];
  return result;
};

const description = 'Find the greatest common divisor of given numbers';

export default () => {
  main(description, nod);
};
