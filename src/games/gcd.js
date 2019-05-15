import main from '..';
import getRandomNumber from '../utils';

const getDivisor = (number1, number2) => {
  let answer = number1;
  while (!(number1 % answer === 0 && number2 % answer === 0)) {
    answer -= 1;
  }
  return answer;
};

const nod = () => {
  const min = getRandomNumber(1, 50);
  const max = getRandomNumber(51, 100);
  const answer = getDivisor(min, max);
  const result = [answer, `${min} ${max}`];
  return result;
};

const description = 'Find the greatest common divisor of given numbers';


export default () => {
  main(description, nod);
};
