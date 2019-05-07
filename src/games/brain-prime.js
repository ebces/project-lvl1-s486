import readlineSync from 'readline-sync';

const prime = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if given number is prime. Otherwise answer "no"');
  const actual = readlineSync.question('May I have your name?');
  playerName(actual);
  let count = 0;

  for (let i = 0; i < 3; i += 1) {
    const rand = Math.floor(Math.random() * 100 + 2);
    console.log(`Question: ${rand}`);
    const answer = readlineSync.question('Your answer: ');
    let num = 1;
    let result = 0;
    while (num <= rand) {
      if (rand % num === 0) {
        result += 1;
      }
      num += 1;
    }
    const trueAnswer = result > 2 ? 'no' : 'yes';
    console.log(trueAnswer === answer ? 'Correct!' : `'${answer}' is wrong answer ;(. Correct answer was '${trueAnswer}'`);
    if (trueAnswer === answer) {
      count += 1;
    } else {
      console.log(`Let's try again, ${actual}!`);
      break;
    }
    if (count === 3) {
      console.log(`Congratulations, ${actual}!`);
    }
  }
};

export default prime;
