import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ListProps } from '../../../types/types';
import { RootState } from '../reducer';


const initialState: ListProps[] = [{
  title: '',
  priority: '',
  color: '',
  products: [],
}];

const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    addLists: (state, { payload }: PayloadAction<ListProps>): ListProps[] => {
      const newList: ListProps = {
        title: payload.title,
        priority: payload.priority,
        color: payload.color,
      }
      
      return [...state, newList];
    },
    removeList: (state, { payload }: PayloadAction<number>): ListProps[] => {
      let newList: ListProps[] = [...state];
      newList.splice(payload, 1);

      return newList;
    }
  }
});

export default listSlice.reducer;
export const { addLists } = listSlice.actions;
export const { removeList } = listSlice.actions;

export const SelectAddList = (state: RootState) => state;