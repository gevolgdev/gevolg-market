import React from 'react'
import { ProductListProps } from '../../../types/types';
import { Container, Detail } from './style';

interface DetailsProps {
  products: ProductListProps[];
  color: string;
};

interface StatusProps {
  productAmount: number;
  amountCollected: number;
  missingAmount: number;
};

const ListDetails: React.FC<DetailsProps> = ({ products, color }) => {

  let status: StatusProps = {
    productAmount: 0,
    amountCollected: 0,
    missingAmount: 0,
  };

  for(let i=0; i < products.length; i++) {
    if(products[i].archive === false) status.productAmount++;
    if(products[i].collected && products[i].archive === false) status.amountCollected++;
    if(products[i].collected === false && products[i].archive === false) status.missingAmount++;
  }

  return (
    <Container>
      <Detail color={color}>
        <h3>{status.productAmount}</h3>
        <p><span className='dot-products'>•</span> Produtos</p>
      </Detail>

      <Detail>
        <h3>{status.missingAmount}</h3>
        <p><span className='dot-pend'>•</span> Pendentes</p>
      </Detail>

      <Detail>
        <h3>{status.amountCollected}</h3>
        <p><span className='dot-collect'>•</span> Coletados</p>
      </Detail>
{/* 
      <Detail>
        <h3>{status.archiveAmount}</h3>
        <p><span className='dot-archive'>•</span> Arquivados</p>
      </Detail> */}
    </Container>
  )
}

export default ListDetails;