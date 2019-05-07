import readlineSync from 'readline-sync';

const progressions = () => {
  console.log('Welcome to the Brain Games!');
  console.log('What number is missing in the progression?');
  const actual = readlineSync.question('May I have your name?');
  playerName(actual);
  let count = 0;

  for (let v = 0; v < 3; v += 1) {
    const start = Math.floor(Math.random() * 20 + 1);
    const step = Math.floor(Math.random() * 5 + 1);
    const rand = Math.floor(Math.random() * 9);
    let newStep = start;
    let string = '';
    const array = [];
    const questionArray = [];

    for (let i = 0; i < 10; i += 1) {
      array.push(newStep);
      questionArray.push(newStep);
      if (i === 9) {
        questionArray[rand] = '..';
      }
      newStep += step;
    }

    for (let i = 0; i < 10; i += 1) {
      string += `${questionArray[i]} `;
    }
    console.log(`Question: ${string}`);
    const answer = readlineSync.question('Your answer: ');
    console.log(Number(answer) === array[rand] ? 'Correct!' : `'${answer}' is wrong answer ;(. Correct answer was '${array[rand]}'`);
    if (Number(answer) === array[rand]) {
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

export default progressions;
