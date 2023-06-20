import React, { Dispatch } from 'react'
import { Container, Button, Header, Inputs } from './style';
import { Wrapper } from '../../../style/GlobalStyle';
import Logo from '../../../assets/logo-light.svg';
import { GrFormClose } from 'react-icons/gr';
import addProductList from '../../../utils/addProductList';

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
          <img src={Logo}/>
          <button onClick={ () => setOpenAddProduct(false) }>
            <GrFormClose color='#FAF8F0'/>
          </button>
        </Header>

        <Inputs>
          <h1>Adicione um produto</h1>
          <div>
            <label>Título do Produto</label>
            <input id='title' type='text' onChange={saveInfosProduct}/>
          </div>
          <div>
            <label>Quantidade</label>
            <input id='amount' type='number' onChange={saveInfosProduct}/>
          </div>
          <div>
            <label>Seção</label>
            <input id='section' type='text' onChange={saveInfosProduct}/>
          </div>
        </Inputs>

        <Button onClick={() => (addProduct(), setOpenAddProduct(false))}>Adicionar</Button>
      </Wrapper>
    </Container>
  );
};

export default AddingProduct;