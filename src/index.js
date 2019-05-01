export const playerName = name => console.log(`Hello, ${name}!`);

export const questions = () => {
  const rand = Math.floor(Math.random() * 20 + 1);
  console.log(`Question: ${rand}`);
  return rand;
};
