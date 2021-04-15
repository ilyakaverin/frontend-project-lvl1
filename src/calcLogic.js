const calculation = (num1, num2, randomOperator) => {
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

export default calculation;
