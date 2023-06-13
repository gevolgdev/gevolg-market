import { useState } from 'react'

const addProductList = () => {

  const [productForm, setProductForm] = useState<boolean>(false);

  const addProduct = () => {
    console.log('Abriu tela!');
    setProductForm(true);
  };

  return { addProduct, productForm, setProductForm };
};

export default addProductList;