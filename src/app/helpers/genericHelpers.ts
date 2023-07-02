
// Return captilized string
export const capitalizeFirstLetter = (str: string) => {
  const string = str && str.toString();
  return string ? string.charAt(0).toUpperCase() + string.slice(1) : null;
};

  