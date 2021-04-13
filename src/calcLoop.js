import readlineSync from 'readline-sync';
import userName from './cli.js';
import { randomNum, randomOperator } from './index.js';
import { calculation, calcGame } from './calcLogic.js';

const num1 = randomNum();
const num2 = randomNum();
const firstCalc = calculation(num1, num2, randomOperator);
const answer = readlineSync.question(`Hi ${userName}\nWhat is the result of the expression?\nQuestion: ${num1} ${randomOperator} ${num2}\nYour answer: `);
let winCount = 1;
let firstQ = calcGame(firstCalc, Number(answer));
let result;

if (firstQ !== 'Correct!') {
  result = firstQ;
} else {
  while (winCount < 3) {
    const newNum1 = randomNum();
    const newNum2 = randomNum();
    const newAnswer = readlineSync.question(`${firstQ}\nQuestion: ${newNum1} ${randomOperator} ${newNum2}\nYou answer: `);
    const newCalc = calculation(newNum1, newNum2, randomOperator);
    firstQ = calcGame(newCalc, Number(newAnswer));
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
const brainCalc = result;
export default brainCalc;
