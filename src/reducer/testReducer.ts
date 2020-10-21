import { createSlice } from '@reduxjs/toolkit';

const initialState = { count: 0 };

const testSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {},
});

export default testSlice;
