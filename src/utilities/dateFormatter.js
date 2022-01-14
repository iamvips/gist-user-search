/**
 * @param stringDate
 * @returns Formated date in mm/dd/yyyy format
 */
export const formatDate = (stringDate) => {
  const formattedDate = new Date(stringDate);
  const date = formattedDate.toLocaleString("en-us").split(",")[0];
  return date;
};
