import { combineReducers } from 'redux';
import listsSlice from './slices/listsSlice';
import showModalSlice from './slices/showModalSlice';
import setNameSlice from './slices/setNameSlice';
import downloadedSlice from './slices/downloadedSlice';

export const rootReducer = combineReducers({
  listsSlice,
  showModalSlice,
  setNameSlice,
  downloadedSlice,
});

export type RootState = ReturnType<typeof rootReducer>