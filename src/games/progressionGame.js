import readlineSync from 'readline-sync';
import userName from '../cli.js';
import { initProgression, missingValueArray } from '../progressionLogic.js';
import { startGame } from '../index.js';

const firstProgression = initProgression();
const missingValueProgression = missingValueArray(firstProgression);

const questionValue = firstProgression[missingValueProgression.indexOf('..')];

let winCount = 1;
const answer = readlineSync.question(`Hi ${userName}!\nWhat number is missing in the progression?\nQuestion: ${missingValueProgression.join(' ')}\nYour answer: `);

let firstQ = startGame(questionValue, Number(answer));
let result;

if (firstQ !== 'Correct!') {
  result = firstQ;
} else {
  while (winCount < 3) {
    const newProgression = initProgression();
    const newMissingValueProgression = missingValueArray(newProgression);
    const newQuestionValue = newProgression[newMissingValueProgression.indexOf('..')];
    const newAnswer = readlineSync.question(`${firstQ}\nQuestion:${newMissingValueProgression.join(' ')}\nYou answer: `);
    firstQ = startGame(newQuestionValue, Number(newAnswer));
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

const brainProgression = result;
export default brainProgression;
