import readlineSync from 'readline-sync';
import userName from '../cli.js';
import { randomNum, startGame } from '../index.js';
import gcd from '../gcdLogic.js';

const num1 = randomNum();
const num2 = randomNum();
const gcdResult = gcd(num1, num2);
const answer = readlineSync.question(`Hi ${userName}!\nFind the greatest common divisor of given numbers.\nQuestion: ${num1} ${num2}\nYour answer: `);
let firstQ = startGame(gcdResult, Number(answer));
let result;
let winCount = 1;

if (firstQ !== 'Correct!') {
  result = firstQ;
} else {
  while (winCount < 3) {
    const newNum1 = randomNum();
    const newNum2 = randomNum();
    const newAnswer = readlineSync.question(`${firstQ}\nQuestion: ${newNum1} ${newNum2}\nYou answer: `);
    const newCalc = gcd(newNum1, newNum2);
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
const brainGcd = result;
export default brainGcd;
