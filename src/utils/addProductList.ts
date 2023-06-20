import { ChangeEvent, useState } from 'react'
import { ProductListProps } from '../types/types';
import { useDispatch } from 'react-redux';
import { addingProduct } from '../lib/redux/slices/listsSlice';

// interface AddProductListProps {
//   addProduct: () => void;
//   openAddProduct: boolean;
//   setOpenAddProduct: (open: boolean) => void;
//   saveInfosProduct: (e: ChangeEvent<HTMLInputElement>) => void;
// }

const addProductList = (index: number) => {

  const INITIAL_VALUE: ProductListProps = 
    { title: '', amount: 0, section: '', index: index, collected: false }
  ;
  const [product, setProduct] = useState<ProductListProps>(INITIAL_VALUE);
  const [openAddProduct, setOpenAddProduct] = useState<boolean>(false);
  const Dispatch = useDispatch();

  const saveInfosProduct = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setProduct(prev => ({...prev, [id]: value}));
  };

  const addProduct = () => Dispatch(addingProduct(product));

  return { addProduct, openAddProduct, setOpenAddProduct, saveInfosProduct };
};

export default addProductList;