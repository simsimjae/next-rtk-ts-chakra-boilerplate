import { createAsyncThunk } from '@reduxjs/toolkit';

export const incrementAsync = createAsyncThunk<number, number>('test/incrementAsync', async diff => {
  return await new Promise(resolve =>
    setTimeout(() => {
      resolve(diff);
    }, 1000),
  );
});
