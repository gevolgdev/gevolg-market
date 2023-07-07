import React, { Dispatch, useState } from 'react'
import { ContainerEdit, Button, HeaderEdit, InputsEdit } from './style';
import { MdClose } from 'react-icons/md';
import useProduct from '../../../hooks/useProduct';
import { dataCategories } from './dataCategories';
import { EditInfosProps, EventProps } from '../../../types/types';

interface EditingProductProps {
  indexMain: number;
  indexChild: number;
  setOpenEdit: Dispatch<React.SetStateAction<boolean>>;
  title: string;
  amount: number;
  category: string;
  measurements: string;
};

const EditingProduct: React.FC<EditingProductProps> = ({ setOpenEdit, indexMain, indexChild, title, amount, category, measurements }) => {

  const { edit } = useProduct(indexMain);

  const INITIAL_VALUE: EditInfosProps = 
    { title, amount, category, measurements }
  ;

  console.log(INITIAL_VALUE.measurements);

  const [editInfosProduct, setEditInfosProduct] = useState<EditInfosProps>(INITIAL_VALUE);

  const saveEditInfosProduct = (e: EventProps) => {
    const { id, value } = e.target;
    setEditInfosProduct(prev => ({...prev, [id]: value}));
    console.log(value);
  };
  
  return (
    <ContainerEdit>
      <HeaderEdit>
        <h1>Edite um<br/> produto</h1>
        <button onClick={ () => setOpenEdit(false) }>
          <MdClose/>
        </button>
      </HeaderEdit>

      <InputsEdit>
        <div>
          <label>Título do Produto</label>
          <input id='title' type='text' onChange={saveEditInfosProduct} value={editInfosProduct.title}/>
        </div>
        <div>
          <label>Quantidade</label>
          <div className="amounts">
            <input id='amount' type='number' onChange={saveEditInfosProduct} value={editInfosProduct.amount}/>
            <select id='measurements' onChange={saveEditInfosProduct} value={editInfosProduct.measurements}>
              <option value='un'>Unidades</option>
              <option value='g'>Gramas</option>
              <option value='kg'>Quilogramas</option>
            </select>
          </div>
        </div>
        <div>
          <label>Categoria</label>
          <select onChange={saveEditInfosProduct} id='category' value={editInfosProduct.category}>
            {dataCategories.sort().map(item => (
              <option value={item}>{item}</option>
            ))}
          </select>
        </div>
      </InputsEdit>

      <Button onClick={() => (edit(indexMain, indexChild, editInfosProduct), setOpenEdit(false))}>Editar</Button>
    </ContainerEdit>
  );
};

export default EditingProduct;