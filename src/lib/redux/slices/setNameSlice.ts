import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface StateProps {
  name: string;
  set: boolean;
};

const initialState: StateProps = {
  name: '',
  set: false,
};

const setNameSlice = createSlice({
  name: 'setName',
  initialState,
  reducers: {
    setName: (state, { payload }: PayloadAction<string>) => {
      let newState = {
        ...state,
        name: payload,
      };

      return newState;
    },
    showSetName: (state, { payload }: PayloadAction<boolean>) => {
      let newState = {
        ...state,
        set: payload,
      };

      return newState;
    },
  },
});

export default setNameSlice.reducer;
export const { setName } = setNameSlice.actions;
export const { showSetName } = setNameSlice.actions;