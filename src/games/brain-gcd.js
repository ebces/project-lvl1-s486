import readlineSync from 'readline-sync';

const nod = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Find the greatest common divisor of given numbers.');
  const actual = readlineSync.question('May I have your name?');
  playerName(actual);
  let count = 0;

  for (let i = 0; i < 3; i += 1) {
    const min = Math.floor(Math.random() * 50 + 1);
    const max = Math.floor(Math.random() * 51 + 49);
    console.log(`Question: ${min} ${max}`);
    let result = min;
    while (!(min % result === 0 && max % result === 0)) {
      result -= 1;
    }
    const answer = readlineSync.question('Your answer: ');
    console.log(Number(answer) === result ? 'Correct!' : `'${answer}' is wrong answer ;(. Correct answer was '${result}'`);
    if (Number(answer) === result) {
      count += 1;
    } else {
      console.log(`Let's try again, ${actual}!`);
      break;
    }
  }
  if (count === 3) {
    console.log(`Congratulations, ${actual}!`);
  }
};

export default nod;
