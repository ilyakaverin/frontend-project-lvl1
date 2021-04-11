import userName from './cli.js';

const isEven = (answer, randomNum) => {
  let avgresult;
  if (randomNum % 2 === 0) {
    if (answer === 'yes') {
      avgresult = 'Correct!';
    } else if (answer === 'no') {
      avgresult = `"no" is wrong answer ;(. Correct answer was "yes"\n Let's try again, ${userName}!`;
    } else {
      avgresult = 'Incorrect input, answer yes or no';
    }
  }
  if (randomNum % 2 !== 0) {
    if (answer === 'yes') {
      avgresult = `"yes" is wrong answer ;(. Correct answer was "no"\n Let's try again, ${userName}!`;
    } else if (answer === 'no') {
      avgresult = 'Correct!';
    } else {
      avgresult = 'Incorrect input, answer yes or no';
    }
  }
  return avgresult;
};

export default isEven;
