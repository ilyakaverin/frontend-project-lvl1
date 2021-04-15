export const gcd = (x, y) => {
  while (y) {
    const t = y;
    y = x % y;
    x = t;
  }
  return x;
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
