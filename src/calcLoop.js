import readlineSync from 'readline-sync';
import userName from './cli.js';
import { randomNum, startGame } from './index.js';
import calculation from './calcLogic.js';

const arrayOfOperators = ['+', '-', '*'];
const randomOperator = arrayOfOperators[Math.floor(Math.random() * arrayOfOperators.length)];

const num1 = randomNum();
const num2 = randomNum();
const firstCalc = calculation(num1, num2, randomOperator);
const answer = readlineSync.question(`Hi ${userName}\nWhat is the result of the expression?\nQuestion: ${num1} ${randomOperator} ${num2}\nYour answer: `);
let winCount = 1;
let firstQ = startGame(firstCalc, Number(answer));
let result;

if (firstQ !== 'Correct!') {
  result = firstQ;
} else {
  while (winCount < 3) {
    const newNum1 = randomNum();
    const newNum2 = randomNum();
    const newAnswer = readlineSync.question(`${firstQ}\nQuestion: ${newNum1} ${randomOperator} ${newNum2}\nYou answer: `);
    const newCalc = calculation(newNum1, newNum2, randomOperator);
    firstQ = startGame(newCalc, Number(newAnswer));
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
