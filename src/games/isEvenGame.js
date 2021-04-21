import readlineSync from 'readline-sync';
import userName from '../cli.js';
import { randomNum } from '../index.js';
import isEven from '../isEvenLogic.js';

const randomNumber = randomNum();
const answer = readlineSync.question(`Hi ${userName}!\nAnswer "yes" if the number is even, otherwise answer "no".\nQuestion:${randomNumber}\nYour answer: `);

let winCount = 1;
let firstQ = isEven(answer, randomNumber);
let result;

if (firstQ !== 'Correct!') {
  result = firstQ;
} else {
  while (winCount < 3) {
    const newNum = randomNum();
    const newAnswer = readlineSync.question(`${firstQ}\nQuestion: ${newNum}\nYou answer: `);
    firstQ = isEven(newAnswer, newNum);
    if (firstQ === 'Correct!') {
      winCount += 1;
    } else {
      result = firstQ;
      break;
    }
  }
}
if (winCount === 3) {
  result = `${firstQ}\nCongratulations ${userName}!`;
}

const brainEven = `${result}`;
export default brainEven;
