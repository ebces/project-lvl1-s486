import main from '..';
import getRandomNumber from '../utils';

const isEven = number => (number % 2 === 0);

const even = () => {
  const question = getRandomNumber(1, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  const result = [answer, question];
  return result;
};

const description = 'Answer "yes" if number even otherwise answer "no"';

export default () => {
  main(description, even);
};
