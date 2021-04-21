import readlineSync from 'readline-sync';
import userName from '../cli.js';
import { randomNum, startGame } from '../index.js';
import isPrime from '../isPrimeLogic.js';

const randomNumber = randomNum();
const answer = readlineSync.question(`Hi ${userName}\nAnswer "yes" if given number is prime. Otherwise answer "no".\nQuestion: ${randomNumber}\nYour answer: `);
const question = isPrime(randomNumber);
let firstQ = startGame(question, answer);
let winCount = 1;
let result;

if (firstQ !== 'Correct!') {
  result = firstQ;
} else {
  while (winCount < 3) {
    const newNum = randomNum();
    const newAnswer = readlineSync.question(`${firstQ}\nQuestion: ${newNum}\nYour answer: `);
    const newQuestion = isPrime(newNum);
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
const brainPrime = result;
export default brainPrime;
