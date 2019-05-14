import main from '..';
import getRandomNumber from '../utils';

const progressions = () => {
  const start = getRandomNumber(1, 20);
  const step = getRandomNumber(1, 5);
  const randomPosition = getRandomNumber(0, 9);

  let newStep = start;
  let string = '';
  const array = [];
  const questionArray = [];

  for (let i = 0; i < 10; i += 1) {
    array.push(newStep);
    questionArray.push(newStep);
    if (i === 9) {
      questionArray[randomPosition] = '..';
    }
    newStep += step;
  }

  for (let i = 0; i < 10; i += 1) {
    string += `${questionArray[i]} `;
  }
  const result = [array[randomPosition], string];
  return result;
};
const description = 'What number is missing in the progression?';

const start = () => {
  main(description, progressions);
};

export default start;
