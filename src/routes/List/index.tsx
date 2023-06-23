import React, {useState} from 'react'
import { useLocation } from 'react-router-dom'
import { AiFillDelete } from 'react-icons/ai';
import { BsCheck } from 'react-icons/bs';
import Logo from '../../assets/logo-light.svg';
import { Container, Header, Content, ProductsItens, Buttons, Product } from './style';
import { AddingProduct, ButtonBack, DeleteContainer, ListDetails } from '../../components/ListInside';
import useProduct from '../../hooks/useProduct';
import { useSelector } from 'react-redux';
import { RootState } from '../../lib/redux/reducer';
import { ListProps } from '../../types/types';

const List: React.FC = () => {

  const location = useLocation();
  const { newCurrentPage } = location?.state;
  const {color, priority, index, title} = newCurrentPage;

  const [confirmDelete, setConfirmDelete] = useState<boolean>(false);

  const { 
    openAddProduct, 
    setOpenAddProduct, 
    collected, 
    unchecks 
  } = useProduct(index);

  const lists: ListProps[] = useSelector((state: RootState) => state.listsSlice.slice(1));
  
  const products = lists[index].products.slice(1);

  return (
    <>
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
              {products.length > 0 && 
                <button onClick={ () => unchecks(index) } className='unchecks'>Desmarcar tudo</button>
              }
            </p>
            <h1><span>{index + 1}.</span> {title}</h1>
          </div>
        </Content>

        <ListDetails
          products={products}
        />

        <ProductsItens>
          { products.map((item, index) => (
            <Product collected={item.collected}>
              <button className='checkbox' onClick={ () => collected(index) }>
                {item.collected && <BsCheck/>}
              </button>
              <h1>( {item.amount === 0 ? '1' : item.amount} ) {item.title} - <span>{item.category}</span></h1>
            </Product>
          ))}
        </ProductsItens>

        <Buttons>
          <button className="manager">Gerenciar</button>
          <button onClick={() => setOpenAddProduct(true)} className="add">Adicionar</button>
        </Buttons>

      </Container>
      
    </>
  );
};

export default List;