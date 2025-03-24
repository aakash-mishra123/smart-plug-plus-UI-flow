export const convertToItalicNumber = (number: number, divisor: number) => {
  return (number / divisor).toFixed(1).toString().replace(".", ",");
};
