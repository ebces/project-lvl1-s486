import main from '..';

const progressions = () => {
  const start = Math.floor(Math.random() * 20 + 1);
  const step = Math.floor(Math.random() * 5 + 1);
  const randomPosition = Math.floor(Math.random() * 9);
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
