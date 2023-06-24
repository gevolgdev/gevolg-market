import React, { Dispatch } from 'react'
import { Container, Button, Header, Inputs } from './style';
import { Wrapper } from '../../../style/GlobalStyle';
import Logo from '../../../assets/logo-light.svg';
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
      <Wrapper>
        <Header>
          {/* <img src={Logo}/> */}
          <h1>Adicione um produto</h1>
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
            <input id='amount' type='number' onChange={saveInfosProduct}/>
          </div>
          <div>
            <label>Categoria</label>
            {/* <input id='category' type='text' onChange={saveInfosProduct}/> */}
            <select onChange={saveInfosProduct} id='category' defaultValue='--'>
              <option value='--'>--</option>
              {dataCategories.sort().map(item => (
                <option value={item}>{item}</option>
              ))}
            </select>
          </div>
        </Inputs>

        <Button onClick={() => (addProduct(), setOpenAddProduct(false))}>Adicionar</Button>
      </Wrapper>
    </Container>
  );
};

export default AddingProduct;