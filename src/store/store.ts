import { combineReducers, configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import testSlice, { testEntityAdapter } from './slices/test/testSlice';

const rootReducer = combineReducers({
  test: testSlice.reducer,
});

const store = configureStore({ reducer: rootReducer, middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger) });

export const testSelectors = testEntityAdapter.getSelectors<RootState>(state => state.test);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export default store;
