import main from '..';
import getRandomNumber from '../utils';

const progressions = () => {
  const start = getRandomNumber(1, 20);
  const step = getRandomNumber(1, 5);
  const hiddenElementPosition = getRandomNumber(0, 9);
  const numberOfArrayElements = 10;

  let answer;
  let question = '';
  const progression = [];

  for (let i = 0; i < numberOfArrayElements; i += 1) {
    progression.push(start + step * i);
    if (i === hiddenElementPosition) {
      answer = progression[hiddenElementPosition];
      progression[hiddenElementPosition] = '..';
    }
    question += `${progression[i]} `;
  }

  question = question.trim();

  const result = [`${answer}`, question];
  return result;
};
const description = 'What number is missing in the progression?';


export default () => {
  main(description, progressions);
};
