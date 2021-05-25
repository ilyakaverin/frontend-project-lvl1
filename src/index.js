import userName from './cli.js';

export const randomNum = () => Math.floor(Math.random() * 100);
export const startGame = (question, answer) => (question === answer ? 'Correct!' : `${answer} is wrong answer ;(. Correct answer was ${question}.\nLet's try again, ${userName}!`);
