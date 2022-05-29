import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { incrementAsync } from './testActions';

interface Book {
  id: string | number;
  title: string;
}

export const testEntityAdapter = createEntityAdapter<Book>({
  selectId: book => book.id,
  sortComparer: (a, b) => a.title.localeCompare(b.title),
});

const testSlice = createSlice({
  name: 'test',
  initialState: testEntityAdapter.getInitialState({ count: 0, loading: 'idle', requestId: undefined, error: null }),
  reducers: {
    increment: (state, action: PayloadAction<number>) => {
      state.count = state.count + action.payload;
    },
    decrement: (state, action: PayloadAction<number>) => {
      state.count = state.count - action.payload;
    },
    bookAdded: testEntityAdapter.addOne,
    booksReceived: (state, action) => {
      testEntityAdapter.setAll(state, action.payload);
    },
    bookUpdated: testEntityAdapter.updateOne,
  },
  extraReducers: builder => {
    builder.addCase(incrementAsync.pending, (state, action) => {
      state.loading = 'pending';
      state.requestId = action.meta.requestId;
    });
    builder.addCase(incrementAsync.fulfilled, (state, action) => {
      if (state.loading === 'pending' && action.meta.requestId === state.requestId) {
        state.count = state.count + action.payload;
      }
    });
  },
});

export const { increment, decrement, bookAdded, booksReceived, bookUpdated } = testSlice.actions;
export default testSlice;
