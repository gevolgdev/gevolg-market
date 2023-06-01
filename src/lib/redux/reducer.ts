import { combineReducers } from 'redux';
import listsSlice from './lists/listsSlice';

export const rootReducer = combineReducers({
  listsSlice,
});

export type RootState = ReturnType<typeof rootReducer>