import readlineSync from 'readline-sync';

export const playerName = name => console.log(`Hello, ${name}!`);

export const questions = () => {
  const rand = Math.floor(Math.random() * 20 + 1);
  console.log(`Question: ${rand}`);
  return rand;
};

export const expressions = () => {
  console.log('Welcome to the Brain Games!');
  console.log('What is the result of the expression?');
  const actual = readlineSync.question('May I have your name?');
  playerName(actual);
  let count = 0;
  for (let i = 0; i < 3; i += 1) {
    const firstNumber = Math.floor(Math.random() * 100 + 1);
    const secondNumber = Math.floor(Math.random() * 100 + 1);
    const rand = Math.floor(Math.random() * 3 + 1);
    let operationResult;
    let newExpression;
    switch (rand) {
      case 1:
        operationResult = firstNumber + secondNumber;
        newExpression = `${firstNumber} + ${secondNumber}`;
        break;
      case 2:
        operationResult = firstNumber - secondNumber;
        newExpression = `${firstNumber} - ${secondNumber}`;
        break;
      default:
        operationResult = firstNumber * secondNumber;
        newExpression = `${firstNumber} * ${secondNumber}`;
    }

    console.log(`Question: ${newExpression}`);
    const answer = readlineSync.question('Your answer: ');
    console.log(Number(answer) === operationResult ? 'Correct!' : `'${answer}' is wrong answer ;(. Correct answer was '${operationResult}'`);
    if (Number(answer) === operationResult) {
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


export const nod = () => {
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


export const progressions = () => {
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
    const arr = [];
    const questionArray = [];

    for (let i = 0; i < 10; i += 1) {
      arr.push(newStep);
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
    console.log(Number(answer) === arr[rand] ? 'Correct!' : `'${answer}' is wrong answer ;(. Correct answer was '${arr[rand]}'`);
    if (Number(answer) === arr[rand]) {
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


export const prime = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if given number is prime. Otherwise answer "no"');
  const actual = readlineSync.question('May I have your name?');
  playerName(actual);
  let count = 0;

  for (let i = 0; i < 3; i += 1) {
    const rand = Math.floor(Math.random() * 100 + 2);
    console.log(`Question: ${rand}`);
    const answer = readlineSync.question('Your answer: ');
    let x = 1;
    let result = 0;
    while (x <= rand) {
      if (rand % x === 0) {
        result += 1;
      }
      x += 1;
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
