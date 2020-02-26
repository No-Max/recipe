export default function (maxLength, text) {
  if (text.length > maxLength) {
    return  text.slice(maxLength - 1 , maxLength) === ' '
    ? `${text.slice(0, maxLength - 1)}...`
    : `${text.slice(0, maxLength)}...`;
  }
  return text;
}