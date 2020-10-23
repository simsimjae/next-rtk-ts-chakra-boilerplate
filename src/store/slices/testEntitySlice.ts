import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

type Book = { id: string | number; title: string };

export const testEntityAdapter = createEntityAdapter<Book>({
  selectId: book => book.id,
  sortComparer: (a, b) => a.title.localeCompare(b.title),
});

export const testEntitySlice = createSlice({
  name: 'testEntity',
  initialState: testEntityAdapter.getInitialState(),
  reducers: {
    bookAdded: testEntityAdapter.addOne,
    booksReceived: (state, action) => {
      testEntityAdapter.setAll(state, action.payload);
    },
    bookUpdated: testEntityAdapter.updateOne,
  },
});

export const { bookAdded, booksReceived, bookUpdated } = testEntitySlice.actions;
export default testEntitySlice;
