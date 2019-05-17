import main from '..';
import getRandomNumber from '../utils';

const length = 10;

const progressions = () => {
  const start = getRandomNumber(1, 20);
  const step = getRandomNumber(1, 5);
  const hiddenElementPosition = getRandomNumber(0, 9);

  const answer = start + step * hiddenElementPosition;
  let question = '';
  const progression = [];

  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
    if (i === hiddenElementPosition) {
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
