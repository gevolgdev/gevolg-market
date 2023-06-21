import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './reducer';
import { loadState, saveState } from '../../utils/localStorage';

const persistedState = loadState();

const store = configureStore({
  reducer: rootReducer,
  preloadedState: persistedState,
});

store.subscribe(() => {
  saveState(store.getState());
});

export default store;