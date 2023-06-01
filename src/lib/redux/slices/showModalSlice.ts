import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../reducer';

interface ModalProps {
  active: boolean | null;
};

const initialState: ModalProps = {
  active: null
};

const showModalSlice = createSlice({
  name: 'showModal',
  initialState,
  reducers: {
    showModal: (state, {payload}: PayloadAction<ModalProps>) => {
      state.active = payload.active;
    },
  }
});

export default showModalSlice.reducer;
export const { showModal } = showModalSlice.actions; 

export const SelectShowModal = (state: RootState) => state;