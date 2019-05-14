import main from '..';
import getRandomNumber from '../utils';

const isEven = number => (number % 2 === 0 ? 'yes' : 'no');

const even = () => {
  const question = getRandomNumber(1, 100);
  const answer = isEven(question);
  const result = [answer, question];
  return result;
};

const rules = 'Answer "yes" if number even otherwise answer "no"';

const start = () => {
  main(rules, even);
};

export default start;
