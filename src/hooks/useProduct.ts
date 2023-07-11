import { ChangeEvent, useState } from 'react'
import { EditInfosProps, EventProps, ProductListProps } from '../@types/types';
import { useDispatch } from 'react-redux';
import { 
  addingProduct, 
  archiveProduct, 
  closeOptionsAllProducts, 
  collectedCheck, 
  collectedUnChecks, 
  openOptions, 
  removeProduct, 
  editProduct 
} from '../lib/redux/slices/listsSlice';

// interface AddProductListProps {
//   addProduct: () => void;
//   openAddProduct: boolean;
//   setOpenAddProduct: (open: boolean) => void;
//   saveInfosProduct: (e: ChangeEvent<HTMLInputElement>) => void;
// }

const useProduct = (index: number) => {

  const INITIAL_VALUE: ProductListProps = {
    title: '',
    amount: 0,
    measurements: '',
    category: '',
    index: index,
    collected: false,
    options: false,
    archive: false
  };
  const [product, setProduct] = useState<ProductListProps>(INITIAL_VALUE);
  const [openAddProduct, setOpenAddProduct] = useState<boolean>(false);
  const Dispatch = useDispatch();

  const saveInfosProduct = (e: EventProps) => {
    const { id, value } = e.target;
    setProduct(prev => ({...prev, [id]: value}));
  };
  
  const addProduct = () => Dispatch(addingProduct(product));

  const unchecks = (indexMain: number) => { 
    Dispatch(collectedUnChecks(indexMain));
    Dispatch(closeOptionsAllProducts(indexMain));
  };

  const collected = (indexProduct: number) => {
    Dispatch(collectedCheck([index, indexProduct]));
  };

  const removeProductList = (indexMain: number, indexChild: number) => {
    Dispatch(removeProduct([indexMain, indexChild]));
  };

  const archive = (indexMain: number, indexChild: number) => {
    Dispatch(archiveProduct([indexMain, indexChild]));
    Dispatch(openOptions([index, indexChild]));
  };

  const edit = (indexMain: number, indexChild: number, infos: EditInfosProps) => {
    const editProductInfos = {
      indexMain,
      indexChild,
      title: infos.title,
      amount: infos.amount,
      category: infos.category,
      measurements: infos.measurements,
    };
    Dispatch(editProduct(editProductInfos));
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
    archive,
    edit,
  };
};

export default useProduct;