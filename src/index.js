export const randomNum = () => Math.floor(Math.random() * 100);
export const startGame = (question, answer) => {
  let result;
  if (question === answer) {
    result = 'Correct!';
  } else {
    result = `${answer} is wrong answer ;(. Correct answer was ${question}.`;
  }
  return result;
};
