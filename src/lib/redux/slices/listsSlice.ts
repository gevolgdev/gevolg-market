import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ListProps, ProductListProps } from '../../../types/types';
import { RootState } from '../reducer';


interface EditProductProps {
  indexMain: number;
  indexChild: number;
  title: string;
  amount: number;
  category: string;
};

const initialState: ListProps[] = [{
  title: '',
  priority: '',
  color: '',
  date: '',
  products: [
    {
      title: '',
      amount: 0,
      category: '',
      index: 0,
      collected: false,
      options: false,
      archive: false,
    }
  ],
}];

const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    addLists: (state, { payload }: PayloadAction<ListProps>): ListProps[] => {
      const currentDate: string = new Date().toLocaleDateString();

      const newList: ListProps = {
        title: payload.title,
        priority: payload.priority,
        color: payload.color,
        date: currentDate,
        products: 
        [{
          title: '',
          amount: 0,
          category: '',
          index: 0,
          collected: false,
          options: false,
          archive: false,
        }],
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
      // products[payload[1] + 1].options = true;

      if(products[payload[1] + 1].collected === false) {
        products[payload[1] + 1].options = false;
      };

      return state;
    },
    collectedUnChecks: (state, { payload }: PayloadAction<number>) => {
      for(let i = 0; i < state[payload + 1].products.length; i++) {
        if(state[payload + 1].products[i].archive === false) {
          state[payload + 1].products[i].collected = false;
        }
      };

      return state;
    },
    removeProduct: (state, { payload }: PayloadAction<number[]>) => {
      state[payload[0] + 1].products.splice(payload[1] + 1, 1); 

      return state;
    },
    openOptions: (state, { payload }: PayloadAction<number[]>) => {
      const optionsIndex = state[payload[0] + 1].products[payload[1] + 1].options;

      const { products } = state[payload[0] + 1];
      products[payload[1] + 1].options = !optionsIndex;

      return state;
    },
    closeOptionsAllProducts: (state, { payload }: PayloadAction<number>) => {
      for(let i = 0; i < state[payload + 1].products.length; i++) {
        state[payload + 1].products[i].options = false;
      };

      return state;
    },
    archiveProduct: (state, { payload }: PayloadAction<number[]>) => {
      const archiveIndex = state[payload[0] + 1].products[payload[1] + 1].archive;

      const { products } = state[payload[0] + 1];
      products[payload[1] + 1].archive = !archiveIndex;

      return state;
    },
    editProduct: (state, { payload }: PayloadAction<EditProductProps>) => {
      const indexPage = payload.indexMain + 1;
      const indexProduct = payload.indexChild + 1;
    
      state[indexPage].products[indexProduct].title = payload.title;
      state[indexPage].products[indexProduct].amount = payload.amount;
      state[indexPage].products[indexProduct].category = payload.category;

      for(let i = 0; i < state[indexPage].products.length; i++) {
        state[indexPage].products[i].options = false;
      };

      return state;
    },
  }
});

export default listSlice.reducer;
export const { addLists } = listSlice.actions;
export const { removeList } = listSlice.actions;
export const { addingProduct } = listSlice.actions;
export const { collectedCheck } = listSlice.actions;
export const { collectedUnChecks } = listSlice.actions;
export const { removeProduct } = listSlice.actions;
export const { openOptions } = listSlice.actions;
export const { archiveProduct } = listSlice.actions;
export const { closeOptionsAllProducts } = listSlice.actions;
export const { editProduct } = listSlice.actions;

export const SelectAddList = (state: RootState) => state;