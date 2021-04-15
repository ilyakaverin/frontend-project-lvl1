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
  if (gcd === answer) {
    result = 'Correct!';
  } else {
    result = `${answer} is wrong answer ;(. Correct answer was ${gcd}.`;
  }
  return result;
};
