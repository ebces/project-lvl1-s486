#!/usr/bin/env node
import * as func from '..';
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if number even otherwise answer "no"');
const actual = readlineSync.question('May I have your name?');
func.playerName(actual);


for (let i = 0; i < 3; i += 1) {
  const number = func.questions();
  const answer = readlineSync.question('Your answer: ');
  let correct = 'no';
  if (number % 2 === 0) {
    correct = 'yes';
  }

  if ((number % 2 === 0 && answer === 'yes') || (number % 2 === 1 && answer === 'no')) {
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correct}'`);
    console.log(`Let's try again, ${actual}!`);
    break;
  }
  if (i === 2) {
    console.log(`Congratulations, ${actual}!`);
  }
}
