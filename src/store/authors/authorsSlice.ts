import { createSlice } from '@reduxjs/toolkit';
import { Author, AuthorsList } from 'types';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState: AuthorsList = [];

export const authorsSlice = createSlice({
	name: 'authors',
	initialState,
	reducers: {
		getAuthors: (state, action: PayloadAction<AuthorsList>) => {
			state.push(...action.payload);
		},
		addAuthor: (state, action: PayloadAction<Author>) => {
			state.push(action.payload);
		},
	},
});

export const { getAuthors, addAuthor } = authorsSlice.actions;
export default authorsSlice.reducer;
