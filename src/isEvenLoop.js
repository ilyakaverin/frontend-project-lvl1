import readlineSync from 'readline-sync';
import userName from './cli.js';
import isEven from './isEvenLogic.js';

const randomNum = () => Math.floor(Math.random() * 100);
const randomNumber = randomNum();
const answer = readlineSync.question(`Hi ${userName}!\nAnswer "yes" if the number is even, otherwise answer "no".\nQuestion:${randomNumber}\nYour answer: `);

let winCount = 1;
let firstQ = isEven(answer, randomNumber);
let result;

if (firstQ !== 'Correct!') {
  result = firstQ;
} else {
  do {
    if (firstQ !== 'Correct!') {
      result = firstQ;
      winCount -= 1;
    } else {
      const newNum = randomNum();
      const newAnswer = readlineSync.question(`${firstQ}\n${winCount}\nQuestion: ${newNum}\nYou answer: `);
      firstQ = isEven(newAnswer, newNum);
      winCount += 1;
    }
  } while (winCount < 3);
}

const finalResult = `${result} + ${winCount}`;
export default finalResult;
