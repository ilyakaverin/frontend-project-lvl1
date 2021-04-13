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
  return `${num1} ${randomOperator} ${num2}\n ${result}`;
};
export const calcGame = (sum, answer) => {
  let result;
  if (sum === answer) {
    result = 'Correct!';
  } else {
    result = `${answer} is wrong answer ;(. Correct answer was ${sum}.`;
  }
  return result;
};
