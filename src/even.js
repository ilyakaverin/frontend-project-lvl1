// import readlineSync from 'readline-sync';
import userName from '../src/cli.js';

const isEven = () => {
  let winCount = 0;
  do {
    const randomNumber = Math.floor(Math.random() * 101);
    // const answer = readlineSync.question(`Question: ${randomNumber}`);
    console.log(randomNumber);
    if (randomNumber % 2 === 0) {
      switch (answer) {
        case 'yes':
          console.log('Correct!');
          winCount += 1;
          break;
        case 'no':
          return '"no" is wrong answer ;(. Correct answer was "yes"';
        default: return 'incorrect input';
      }
    }
    if (randomNumber % 2 !== 0) {
      switch (answer) {
        case 'yes':
          return '"yes" is wrong answer ;(. Correct answer was "no"';
        case 'no':
          console.log('Correct!');
          winCount += 1;
          break;
        default: return 'incorrect input';
      }
    }
  } while (winCount < 3);
  if (winCount === 3) { return `gratz ${userName}`; }
};
export default isEven;
