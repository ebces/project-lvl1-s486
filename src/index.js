import readlineSync from 'readline-sync';

const main = (rules, func) => {
  console.log('Welcome to the Brain Games!');
  console.log(rules);
  const playerName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${playerName}!`);
  for (let i = 0; i < 3; i += 1) {
    const result = func();
    const answer = result[0];
    const question = result[1];

    console.log(`Question: ${question}`);
    const playerAnswer = readlineSync.question('Your answer:');

    if (playerAnswer === String(answer)) {
      console.log('Correct!');
    } else {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${answer}'`);
      console.log(`Let's try again, ${playerName}!`);
      break;
    }
    if (i === 2) {
      console.log(`Congratulations, ${playerName}!`);
    }
  }
};


export default main;
