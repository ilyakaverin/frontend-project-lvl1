import readlineSync from 'readline-sync';
import userName from './cli.js';

const randomNum = Math.floor(Math.random() * 100);
const answer = readlineSync.question(
  `Hi ${userName}!\nAnswer "yes" if the number is even, otherwise answer "no".\nQuestion:${randomNum}\nYour answer: `,
);

let avgresult;
let winCount = 0;
do {
  if (randomNum % 2 === 0) {
    if (answer === 'yes') {
      avgresult = 'Correct';
      winCount += 1;
    } else if (answer === 'no') {
      avgresult = '"no" is wrong answer ;(. Correct answer was "yes"';
      break;
    } else {
      avgresult = 'Incorrect input, answer yes or no';
      break;
    }
  }
  if (randomNum % 2 !== 0) {
    if (answer === 'yes') {
      avgresult = '"yes" is wrong answer ;(. Correct answer was "no"';
      break;
    } else if (answer === 'no') {
      avgresult = 'Correct';
      winCount += 1;
    } else {
      avgresult = 'Incorrect input, answer yes or no';
      break;
    }
  }
} while (winCount < 3);

const result = `${avgresult} ${winCount}`;

export default result;
