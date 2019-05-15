import main from '..';
import getRandomNumber from '../utils';

const progressions = () => {
  const start = getRandomNumber(1, 20);
  const step = getRandomNumber(1, 5);
  const hiddenElementPosition = getRandomNumber(0, 9);
  const numberOfArrayElements = 10;
  const lastElementOfArray = 9;
  let newStep = start;
  let string = '';
  const array = [];
  const questionArray = [];

  for (let i = 0; i < numberOfArrayElements; i += 1) {
    array.push(newStep);
    questionArray.push(newStep);
    if (i === lastElementOfArray) {
      questionArray[hiddenElementPosition] = '..';
    }
    newStep += step;
  }

  for (let i = 0; i < 10; i += 1) {
    string += `${questionArray[i]} `;
  }
  const result = [array[hiddenElementPosition], string];
  return result;
};
const description = 'What number is missing in the progression?';


export default () => {
  main(description, progressions);
};
