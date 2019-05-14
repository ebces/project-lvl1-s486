import main from '..';
import randomNumber from '../utils';

const isEven = number => (number % 2 === 0 ? 'yes' : 'no');

const even = () => {
  const question = randomNumber(1, 100);
  const answer = isEven(question);
  const result = [answer, question];
  return result;
};

const description = 'Answer "yes" if number even otherwise answer "no"';

const start = () => {
  main(description, even);
};

export default start;
