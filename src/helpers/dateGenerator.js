import { format } from 'date-fns';

export const dateGenerator = (date) => format(new Date(date), 'M.d.yyyy');
