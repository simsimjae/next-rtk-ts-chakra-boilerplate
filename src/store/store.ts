import { combineReducers, configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import testSlice from './slices/test/testSlice';
import { testEntityAdapter } from './slices/testEntitySlice';

const rootReducer = combineReducers({
  test: testSlice.reducer,
});

export const testSelectors = testEntityAdapter.getSelectors<RootState>(state => state.test);

const store = configureStore({ reducer: rootReducer, middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger) });

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export default store;
