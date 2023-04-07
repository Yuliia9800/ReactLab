import { createAsyncThunk } from '@reduxjs/toolkit';

import { getAuthorsAPI, addAuthorAPI } from 'services';
import { Author, AuthorsList } from 'types';

export const getAuthors = createAsyncThunk<AuthorsList>(
	'authors/get',
	async () => {
		const response = await getAuthorsAPI();

		return response.data.result;
	}
);

export const addAuthor = createAsyncThunk<Author, Author>(
	'authors/add',
	async (author) => {
		const response = await addAuthorAPI(author);

		return response.data.result;
	}
);
