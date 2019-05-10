import main from '..';

const prime = () => {
  const random = Math.floor(Math.random() * 100 + 2);
  let count = 0;

  for (let i = 1; i <= random; i += 1) {
    if (random % i === 0) {
      count += 1;
    }
  }
  const answer = count > 2 ? 'no' : 'yes';
  const result = [answer, random];
  return result;
};

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no"';
const start = () => {
  main(rules, prime);
};

export default start;
