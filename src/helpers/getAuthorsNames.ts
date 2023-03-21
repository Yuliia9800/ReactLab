import { mockedAuthorsList } from '../constants';

const getAuthorName = (authorId: string) =>
	mockedAuthorsList.find(({ id }) => id === authorId)?.name;

export const getAuthorsNames = (authors: string[]) =>
	authors.map((author) => getAuthorName(author));
