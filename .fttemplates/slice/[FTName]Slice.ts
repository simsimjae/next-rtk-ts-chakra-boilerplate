import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import <FTName | capitalize>Model from './<FTName | capitalize>Model';
import FirebaseError from '../../../constants/FirebaseError';
import { delete<FTName | capitalize>, get<FTName | capitalize>, get<FTName | capitalize>s, post<FTName | capitalize>, post<FTName | capitalize>Image, update<FTName | capitalize> } from './<FTName>Actions';
import { uniq } from 'lodash';

export const <FTName>EntityAdapter = createEntityAdapter<<FTName | capitalize>Model>();

const <FTName>Slice = createSlice({
  name: '<FTName>Slice',
  initialState: <FTName>EntityAdapter.getInitialState({
    isLoading: false,
    imageUrls: [] as string[],
    error: {
      code: '',
      message: '',
    },
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(get<FTName | capitalize>.fulfilled, <FTName>EntityAdapter.addOne);
    builder.addCase(get<FTName | capitalize>s.fulfilled, <FTName>EntityAdapter.addMany);
    builder.addCase(post<FTName | capitalize>.fulfilled, <FTName>EntityAdapter.addOne);
    builder.addCase(update<FTName | capitalize>.fulfilled, <FTName>EntityAdapter.updateOne);
    builder.addCase(delete<FTName | capitalize>.fulfilled, <FTName>EntityAdapter.removeOne);
    builder.addCase(post<FTName | capitalize>Image.fulfilled, (state, action: PayloadAction<string>) => {
      state.imageUrls = uniq(state.imageUrls.concat([action.payload]));
    });
    builder.addMatcher(
      (action) => action.type.startsWith('<FTName>Slice') && action.type.endsWith('/pending'),
      (state, action) => {
        state.isLoading = true;
        state.error.code = '';
        state.error.message = '';
      },
    );
    builder.addMatcher(
      (action) => action.type.startsWith('<FTName>Slice') && action.type.endsWith('/fulfilled'),
      (state, action) => {
        state.isLoading = false;
        state.error.code = '';
        state.error.message = '';
      },
    );
    builder.addMatcher(
      (action) => action.type.startsWith('<FTName>Slice') && action.type.endsWith('/rejected'),
      (state, action) => {
        state.isLoading = false;
        state.error.code = action.error?.code;
        state.error.message = FirebaseError.getMessage(action.error?.code);
      },
    );
  },
});

export default <FTName>Slice;
