import main from '..';
import getRandomNumber from '../utils';

const isPrime = (number) => {
  let count = 0;

  if (number < 1) {
    return false;
  }

  for (let i = 1; i <= number; i += 1) {
    if (number % i === 0) {
      count += 1;
    }
    if (count > 2) {
      return false;
    }
  }

  return true;
};
const prime = () => {
  const question = getRandomNumber(2, 100);
  const answer = isPrime(question) ? 'yes' : 'no';
  const result = [answer, question];

  return result;
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no"';


export default () => {
  main(description, prime);
};
