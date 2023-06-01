import { combineReducers } from 'redux';
import listsSlice from './slices/listsSlice';
import showModalSlice from './slices/showModalSlice';

export const rootReducer = combineReducers({
  listsSlice,
  showModalSlice,
});

export type RootState = ReturnType<typeof rootReducer>