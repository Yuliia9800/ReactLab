import { format } from 'date-fns';

export const dateGenerator = (date: string | Date) =>
	format(new Date(date), 'M.d.yyyy');
