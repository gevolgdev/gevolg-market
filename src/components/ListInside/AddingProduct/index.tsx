import React, { Dispatch } from 'react'
import { Container } from './style';
import addProductList from '../../../utils/addProductList';
import { Wrapper } from '../../../style/GlobalStyle';

interface AddingProductProps {
  setProductForm: Dispatch<React.SetStateAction<boolean>>
};

const AddingProduct: React.FC<AddingProductProps> = ({ setProductForm }) => {
  
  return (
    <Container>
      <Wrapper>
        <button onClick={ () => setProductForm(false) }>✕</button>
      </Wrapper>
    </Container>
  );
};

export default AddingProduct;