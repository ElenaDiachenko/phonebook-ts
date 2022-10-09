import { format } from 'date-fns';

export const useDate = () => {
  const d = new Date();
  const currentMonth = format(d, 'MMMM	');
  const fullDate = format(d, 'MMMM do, yyyy');
  return { currentMonth, fullDate };
};
