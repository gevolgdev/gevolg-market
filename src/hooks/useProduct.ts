import { ChangeEvent, useState } from 'react'
import { EventProps, ProductListProps } from '../types/types';
import { useDispatch } from 'react-redux';
import { addingProduct, collectedCheck, collectedUnChecks, openOptions, removeProduct } from '../lib/redux/slices/listsSlice';

// interface AddProductListProps {
//   addProduct: () => void;
//   openAddProduct: boolean;
//   setOpenAddProduct: (open: boolean) => void;
//   saveInfosProduct: (e: ChangeEvent<HTMLInputElement>) => void;
// }

const useProduct = (index: number) => {

  const INITIAL_VALUE: ProductListProps = 
    { title: '', amount: 0, category: '', index: index, collected: false, options: false }
  ;
  const [product, setProduct] = useState<ProductListProps>(INITIAL_VALUE);
  const [openAddProduct, setOpenAddProduct] = useState<boolean>(false);
  const Dispatch = useDispatch();

  const saveInfosProduct = (e: EventProps) => {
    const { id, value } = e.target;
    setProduct(prev => ({...prev, [id]: value}));
    console.log( id, value );
  };
  
  const addProduct = () => Dispatch(addingProduct(product));

  const unchecks = (index: number) => { 
    Dispatch(collectedUnChecks(index));
  };

  const collected = (indexProduct: number) => {
    Dispatch(collectedCheck([index, indexProduct]));
  };

  const removeProductList = (indexMain: number, indexChild: number) => {
    console.log(indexMain, indexChild);
    Dispatch(removeProduct([indexMain, indexChild]));
  };

  const options = (indexOption: number) => {
    Dispatch(openOptions([index, indexOption]));
  };

  return { 
    addProduct, 
    openAddProduct, 
    setOpenAddProduct, 
    saveInfosProduct, 
    collected, 
    unchecks,
    removeProductList,
    options,
  };
};

export default useProduct;