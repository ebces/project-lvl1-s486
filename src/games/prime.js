import main from '..';
import getRandomNumber from '../utils';

const isPrime = (number) => {
  let count = 0;
  for (let i = 1; i <= number; i += 1) {
    if (number % i === 0) {
      count += 1;
    }
  }
  return count > 2 ? 'no' : 'yes';
};
const prime = () => {
  const question = getRandomNumber(2, 100);
  const answer = isPrime(question);
  const result = [answer, question];
  return result;
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no"';


export default () => {
  main(description, prime);
};
