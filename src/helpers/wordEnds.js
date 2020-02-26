export default function (number, wordsArr) {
  const lastDight = number > 10 ? number % 10 : number; 
  if (lastDight === 1) {
    return wordsArr[0];
  } else if (lastDight > 1 && lastDight < 5) {
    return wordsArr[1];
  }
  return wordsArr[2];
}