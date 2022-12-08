export const useDate = () => {
  const currentDate = new Date();
  const fullDate = currentDate.toLocaleString('en-US', {
    day: 'numeric',
    year: 'numeric',
    month: 'long',
  });
  const currentMonth = currentDate.toLocaleString('en-US', {
    month: 'long',
  });
  return { currentMonth, fullDate };
};
