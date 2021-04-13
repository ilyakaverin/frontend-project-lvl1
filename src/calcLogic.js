export const calculation = (num1, num2, randomOperator) => {
  let result;
  switch (randomOperator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    default: return false;
  }
  return result;
};
export const calcGame = (sum, answer) => {
  let result;
  if (sum === answer) {
    result = 'Correct!';
  } else {
    result = `${answer} is wrong answer ;(. Correct answer was ${sum}.`;
  }
  if (Number(sum) !== Number(answer)) {
    result = 'incorrect input';
  }
  return result;
};
