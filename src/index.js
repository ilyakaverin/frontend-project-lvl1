export const randomNum = () => Math.floor(Math.random() * 100);

const arrayOfOperators = ['+', '-', '*'];
export const randomOperator = arrayOfOperators[Math.floor(Math.random() * arrayOfOperators.length)];
