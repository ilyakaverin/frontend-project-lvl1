export const gcd = (x, y) => {
  if (!y) {
    return x;
  }

  return gcd(y, x % y);
};

export const gcdGame = (gcdResult, answer) => {
  let result;
  if (gcdResult === answer) {
    result = 'Correct!';
  } else {
    result = `${answer} is wrong answer ;(. Correct answer was ${gcdResult}.`;
  }
  return result;
};
