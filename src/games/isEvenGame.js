import readlineSync from 'readline-sync';
import userName from '../cli.js';
import { randomNum, startGame } from '../index.js';
import isEven from '../isEvenLogic.js';

const randomNumber = randomNum();
const answer = readlineSync.question(`Hi ${userName}!\nAnswer "yes" if the number is even, otherwise answer "no".\nQuestion: ${randomNumber}\nYour answer: `);
const question = isEven(randomNumber);
let firstQ = startGame(question, answer);
let winCount = 1;
let result;

if (firstQ !== 'Correct!') {
  result = firstQ;
} else {
  while (winCount < 3) {
    const newNum = randomNum();
    const newAnswer = readlineSync.question(`${firstQ}\nQuestion: ${newNum}\nYou answer: `);
    const newQuestion = isEven(newNum);
    firstQ = startGame(newQuestion, newAnswer);
    if (firstQ === 'Correct!') {
      winCount += 1;
    } else {
      result = firstQ;
      break;
    }
  }
}
if (winCount === 3) {
  result = `${firstQ}\nCongratulations, ${userName}!`;
}

const brainEven = `${result}`;
export default brainEven;
