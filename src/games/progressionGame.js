import readlineSync from 'readline-sync';
import userName from '../cli.js';
import { initProgression, missingValueArray } from '../progressionLogic.js';
import { startGame } from '../index.js';

const firstProgression = initProgression();

const questionValue = firstProgression[missingValueArray(firstProgression).indexOf('..')];

const winCount = 1;
 const answer = readlineSync.question(`Hi ${userName}!\nWhat number is missing in the progression?\nQuestion: ${missingValueArray(firstProgression).join(' ')}\nYour answer: `);

export const firstQ = startGame(questionValue, Number(answer));
let result;
