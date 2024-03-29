import React, { Dispatch } from 'react'
import { Container, Button, Header, Inputs } from './style';
import { MdClose } from 'react-icons/md';
import addProductList from '../../../hooks/useProduct';
import { dataCategories } from './dataCategories';

interface AddingProductProps {
  setOpenAddProduct: Dispatch<React.SetStateAction<boolean>>;
  index: number;
};

const AddingProduct: React.FC<AddingProductProps> = ({ setOpenAddProduct, index }) => {

  const { addProduct, saveInfosProduct } = addProductList(index);
  
  return (
    <Container>
      <div className="content">
        <Header>
          <h1>Adicione um<br/> produto</h1>
          <button onClick={ () => setOpenAddProduct(false) }>
            <MdClose/>
          </button>
        </Header>

        <Inputs>
          <div>
            <label>Título do Produto</label>
            <input id='title' type='text' onChange={saveInfosProduct}/>
          </div>
          <div>
            <label>Quantidade</label>
            <div className="amounts">
              <input id='amount' type='number' onChange={saveInfosProduct}/>
              <select id='measurements' onChange={saveInfosProduct} defaultValue='--'>
                <option value='--' disabled>--</option>
                <option value='un'>Unidades</option>
                <option value='g'>Gramas</option>
                <option value='kg'>Quilogramas</option>
              </select>
            </div>
          </div>
          <div>
            <label>Categoria</label>
            {/* <input id='category' type='text' onChange={saveInfosProduct}/> */}
            <select onChange={saveInfosProduct} id='category' defaultValue='--'>
              <option value='--' disabled>--</option>
              {dataCategories.sort().map(item => (
                <option value={item}>{item}</option>
              ))}
            </select>
          </div>
        </Inputs>

        <Button onClick={() => (addProduct(), setOpenAddProduct(false))}>Adicionar</Button>
      </div>
    </Container>
  );
};

export default AddingProduct;