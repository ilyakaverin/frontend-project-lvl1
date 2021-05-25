const gcd = (x, y) => {
  if (!y) {
    return x;
  }
  return gcd(y, x % y);
};
export default gcd;
