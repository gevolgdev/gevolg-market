import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ListProps, ProductListProps } from '../../../types/types';
import { RootState } from '../reducer';


const initialState: ListProps[] = [{
  title: '',
  priority: '',
  color: '',
  products: [
    {title: '',
    amount: 0,
    section: '',
    index: 0,
    collected: false,}
  ],
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
        products: [{title: '',
        amount: 0,
        section: '',
        index: 0,
        collected: false}],
      }
      
      return [...state, newList];
    },
    removeList: (state, { payload }: PayloadAction<number>): ListProps[] => {
      let newList: ListProps[] = [...state];
      newList.splice(payload, 1);

      return newList;
    },
    addingProduct: (state, { payload }: PayloadAction<ProductListProps>) => {
      state[payload.index + 1].products.push(payload);

      return state;
    },
    collectedCheck: (state, { payload }: PayloadAction<number[]>) => {
      const collectedIndex = state[payload[0] + 1].products[payload[1] + 1].collected;

      const { products } = state[payload[0] + 1];
      products[payload[1] + 1].collected = !collectedIndex;

      return state;
    }
  }
});

export default listSlice.reducer;
export const { addLists } = listSlice.actions;
export const { removeList } = listSlice.actions;
export const { addingProduct } = listSlice.actions;
export const { collectedCheck } = listSlice.actions;

export const SelectAddList = (state: RootState) => state;