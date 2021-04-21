import { randomNum } from './index.js';

export const initProgression = () => {
  const arrLength = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
  const arr = [];
  const firstNum = randomNum();
  const randomStep = Math.floor(Math.random() * 10) + 1;
  arr.push(firstNum);
  for (let i = 0; i < arrLength; i += 1) {
    const lastNum = arr[arr.length - 1];
    arr.push(lastNum + randomStep);
  }
  return arr;
};
export const missingValueArray = (array) => {
  const newArray = [...array];
  const randomValueFromArray = Math.floor(Math.random() * array.length - 1);
  newArray[randomValueFromArray] = '..';
  return newArray;
};
