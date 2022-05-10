export const capitalizeFirstLetter = (string) => {
  const loweredString = string.toLowerCase();
  return loweredString.charAt(0).toUpperCase() + loweredString.slice(1);
};
