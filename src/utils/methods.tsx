export const convertToItalicNumber = (
  number: number,
  divisor: number,
  decimalValues: number
) => {
  return (number / divisor).toFixed(decimalValues).toString().replace(".", ",");
};
