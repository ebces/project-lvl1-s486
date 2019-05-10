import main from '..';

const even = () => {
  const number = Math.floor(Math.random() * 100 + 1);
  const answer = number % 2 === 0 ? 'yes' : 'no';
  const result = [answer, number];
  return result;
};

const rules = 'Answer "yes" if number even otherwise answer "no"';

const start = () => {
  main(rules, even);
};

export default start;
