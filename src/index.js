import readlineSync from 'readline-sync';

export const playerName = name => console.log(`Hello, ${name}!`);

export const questions = () => {
  const rand = Math.floor(Math.random() * 20 + 1);
  console.log(`Question: ${rand}`);
  return rand;
};

export const expressions = () => {
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
    console.log(Number(answer) === operationResult ? 'Correct!' : `'${answer}' is wrong answer ;(. Correct answer was '${operation}'`);
    if (Number(answer) === operationResult) {
      count += 1;
    } else {
      console.log("Let's try again, Sam!");
    }
  }
};
