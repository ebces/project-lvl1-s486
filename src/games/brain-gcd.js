import main from '..';

const nod = () => {
  const min = Math.floor(Math.random() * 50 + 1);
  const max = Math.floor(Math.random() * 51 + 49);
  let answer = min;
  while (!(min % answer === 0 && max % answer === 0)) {
    answer -= 1;
  }
  const result = [answer, `${min} ${max}`];
  return result;
};

const rules = 'Find the greatest common divisor of given numbers';
const start = () => {
  main(rules, nod);
};

export default start;
