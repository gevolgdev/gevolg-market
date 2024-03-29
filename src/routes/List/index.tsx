import React, {useState} from 'react'
import { useLocation } from 'react-router-dom'
import { AiFillDelete } from 'react-icons/ai';
import { HiCheckCircle } from 'react-icons/hi';
import Logo from '/logo-light.svg';
import { Container, Header, Content, ProductsItens, Buttons } from './style';
import { AddingProduct, ButtonBack, DeleteContainer, ListStatus } from '../../components/List';
import useProduct from '../../hooks/useProduct';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../lib/redux/reducer';
import { ListProps } from '../../@types/types';
import ArchiveProducts from '../../components/List/ArchiveProducts';
import ProductCard from '../../components/List/ProductCard';

const List: React.FC = () => {

  const location = useLocation();
  const { newCurrentPage } = location?.state;
  const {color, priority, index, title} = newCurrentPage;

  const [confirmDelete, setConfirmDelete] = useState<boolean>(false);
  const [openArchive, setOpenArchive] = useState<boolean>(false);
  const Dispatch = useDispatch();

  const { 
    openAddProduct, 
    setOpenAddProduct,
    unchecks,
  } = useProduct(index);

  // const { order } = orderProducts();

  const lists: ListProps[] = useSelector((state: RootState) => state.listsSlice.slice(1));
  
  const products = lists[index].products.slice(1);
  
  let archiveAmount: number = 0;
  let uncheckPermission: boolean = false;
  for(let i = 0; i < products.length; i++) {
    if(products[i].collected === true && products[i].archive === false) {
      uncheckPermission = true;
    }
    if(products[i].archive === true) archiveAmount++
  };
  
  return (
    <>
      { openArchive && <ArchiveProducts color={color} products={products} indexPage={index} setOpenArchive={setOpenArchive}/> }
      
      { confirmDelete && <DeleteContainer 
        index={ index } 
        setConfirmDelete={ setConfirmDelete } 
        title={ title }
      /> }

      { openAddProduct && <AddingProduct setOpenAddProduct={setOpenAddProduct} index={index}/> }


      <Header color={ color }>
        <ButtonBack mode='light'/>
        <img src={ Logo }/>
        <button className='delete' onClick={ () => setConfirmDelete(true) }>
          <AiFillDelete/>
        </button>
      </Header>

      <Container>
        <Content>
          <div className="header">
            <p>
              Prioridade { priority.toLowerCase() }
              { uncheckPermission && 
                <button onClick={ () => unchecks(index) } className='unchecks'>
                  <HiCheckCircle/> Desmarcar todos
                </button>
              }
            </p>
            <h1>{title}</h1>
          </div>
        </Content>

        <ListStatus products={products} color={color}/>

        <ProductsItens>
          { products.map((item, i) => 
            item.archive || <ProductCard {...item} index={index} i={i} isCollected={item.collected}/>
            ).reverse()}
        </ProductsItens>


        {openArchive || <Buttons>
          <button onClick={() => setOpenArchive(true)} className="archive">Arquivados ({archiveAmount})</button>
          <button onClick={() => setOpenAddProduct(true)} className="add">Adicionar</button>
        </Buttons>}

      </Container>
      
    </>
  );
};

export default List;