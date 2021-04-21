const isEven = (num) => {
  let result;
  if (num % 2 === 0) {
    result = 'yes';
  }
  if (num % 2 !== 0) {
    result = 'no';
  }
  return result;
};

export default isEven;
