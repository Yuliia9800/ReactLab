import { mockedAuthorsList } from 'constants/mockedData';

export const getAuthorName = (authorId) =>
	mockedAuthorsList.find(({ id }) => id === authorId)?.name;
