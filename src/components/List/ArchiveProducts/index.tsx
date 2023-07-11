import React from 'react'
import { Container } from './style';
import { ProductListProps } from '../../../types/types';
import ProductCard from '../ProductCard';
import { ProductsItens } from '../../../routes/List/style';
import { IoFileTray } from 'react-icons/io5';
import { BsArrowLeftShort } from 'react-icons/bs';

interface ArchiveProps {
  products: ProductListProps[];
  indexPage: number;
  setOpenArchive: React.Dispatch<React.SetStateAction<boolean>>;
  color: string;
};

const ArchiveProducts: React.FC<ArchiveProps> = ({ products, indexPage, setOpenArchive, color }) => {

  let productsArchive: number = 0;
  products.forEach(item => {
    if (item.archive === true) ++productsArchive;
  });

  return (
    <Container color={color}>
      <header>
        <button onClick={() => setOpenArchive(false)}><BsArrowLeftShort fontSize={35}/></button>
        <h1 className='title'><IoFileTray/> Arquivados</h1>
        <div/>
        <div/>
        <div/>
      </header>

      <div className="content">
        {
          productsArchive > 0 
          ? 
          <ProductsItens>
            {products.map((item, i) => item.archive &&
              <ProductCard {...item} isCollected={item.collected} i={i} index={indexPage}/>
            )}
          </ProductsItens>
          : 
          <span className='empty'>Não há itens arquivados</span>
        }
      </div>
    </Container>
  );
};

export default ArchiveProducts;