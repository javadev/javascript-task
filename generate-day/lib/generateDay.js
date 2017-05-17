function generateDay (n) {
  if (n === undefined || n === null) {
    throw new Error('n is null or undefined');
  }
  if (n > 20) {
    n = n % 10;
  }
  if (n === 1) {
    return "день";
  } else if (n === 2 || n === 3 || n === 4) {
    return "дня";
  }
  return "дней";
}
module.exports = {
  generateDay: generateDay
};
