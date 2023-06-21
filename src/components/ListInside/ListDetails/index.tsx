import React from 'react'
import { ProductListProps } from '../../../types/types';
import { Container, Detail } from './style';

interface DetailsProps {
  products: ProductListProps[];
};

const ListDetails: React.FC<DetailsProps> = ({ products }) => {

  let amountCollected: number = 0;
  for(let i=0; i < products.length; i++) {
    if(products[i].collected) amountCollected++;
  }
  
  let missingAmount: number = 0;
  for(let i=0; i < products.length; i++) {
    if(products[i].collected === false) missingAmount++;
  }

  return (
    <Container>
      <Detail>
        <span>{products.length}</span>
        <p>Produtos</p>
      </Detail>

      <Detail>
        <span>{missingAmount}</span>
        <p>Pendentes</p>
      </Detail>

      <Detail>
        <span>{amountCollected}</span>
        <p>Coletados</p>
      </Detail>
    </Container>
  )
}

export default ListDetails;