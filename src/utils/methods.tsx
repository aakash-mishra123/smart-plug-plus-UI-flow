export const convertToItalicNumber = (
  number: number,
  divisor: number,
  decimalValues: number
) => {
  return (number / divisor).toFixed(decimalValues).toString().replace(".", ",");
};
export const toTitleCase = (str: string) => {
  return str
    .toLowerCase() // Make everything lowercase first
    .split(" ") // Split by spaces
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize first letter
    .join(" "); // Join back to a string
};
