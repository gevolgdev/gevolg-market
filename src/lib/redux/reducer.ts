import { combineReducers } from 'redux';
import listsSlice from './slices/listsSlice';
import showModalSlice from './slices/showModalSlice';
import setNameSlice from './slices/setNameSlice';

export const rootReducer = combineReducers({
  listsSlice,
  showModalSlice,
  setNameSlice,
});

export type RootState = ReturnType<typeof rootReducer>