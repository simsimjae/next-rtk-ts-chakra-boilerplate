import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

export const incrementAsync = createAsyncThunk<number, number>('test/incrementAsync', async diff => {
  return await new Promise(resolve =>
    setTimeout(() => {
      resolve(diff);
    }, 1000),
  );
});

const testSlice = createSlice({
  name: 'test',
  initialState: { count: 0, loading: 'idle', requestId: undefined, error: null },
  reducers: {
    increment: (state, action: PayloadAction<number>) => {
      state.count = state.count + action.payload;
    },
    decrement: (state, action: PayloadAction<number>) => {
      state.count = state.count - action.payload;
    },
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

export const { increment, decrement } = testSlice.actions;
export default testSlice;
