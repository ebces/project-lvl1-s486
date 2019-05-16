import readlineSync from 'readline-sync';

const countOfRound = 3;

const main = (description, gameFunction) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  const playerName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${playerName}!`);


  for (let i = 0; i < countOfRound; i += 1) {
    const result = gameFunction();
    const [answer, question] = result;

    console.log(`Question: ${question}`);
    const playerAnswer = readlineSync.question('Your answer:');

    if (playerAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${answer}'`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${playerName}!`);
};


export default main;
