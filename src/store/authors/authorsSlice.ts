import { createSlice } from '@reduxjs/toolkit';

import { AuthorsList } from 'types';
import { getAuthors, addAuthor } from './authorsThunk';

const initialState: AuthorsList = [];

export const authorsSlice = createSlice({
	name: 'authors',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getAuthors.fulfilled, (state, action) => {
			return (state = action.payload);
		});
		builder.addCase(addAuthor.fulfilled, (state, action) => {
			state.push(action.payload);
		});
	},
});

export default authorsSlice.reducer;
