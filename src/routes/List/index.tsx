import React, {useState} from 'react'
import { useLocation } from 'react-router-dom'
import ButtonBack from '../../components/ListInside/ButtonBack';
import { Container, Header, Content, ProductsItens, Buttons } from './style';
import Logo from '../../assets/logo-light.svg';
import { AiFillDelete } from 'react-icons/ai';
import DeleteContainer from '../../components/ListInside/DeleteContainer';
import addProductList from '../../utils/addProductList';
import AddingProduct from '../../components/ListInside/AddingProduct';
import { useSelector } from 'react-redux';
import { RootState } from '../../lib/redux/reducer';
import { ListProps } from '../../types/types';

const List: React.FC = () => {

  const [confirmDelete, setConfirmDelete] = useState<boolean>(false);
  const { openAddProduct, setOpenAddProduct } = addProductList(0);
  const lists: ListProps[] = useSelector((state: RootState) => state.listsSlice.slice(1));
  
  const location = useLocation();
  const { newCurrentPage } = location?.state;
  const {color, priority, index, title} = newCurrentPage;
  
  const products = lists[index].products;

  return (
    <>
      { confirmDelete && <DeleteContainer 
        index={index} 
        setConfirmDelete={setConfirmDelete} 
        title={title}
      /> }

      { openAddProduct && <AddingProduct setOpenAddProduct={setOpenAddProduct} index={index}/> }

      <Header color={ color }>
        <ButtonBack mode='light'/>
        <img src={Logo}/>
        <button className='delete' onClick={ () => setConfirmDelete(true) }>
          <AiFillDelete/>
        </button>
      </Header>

      <Container>
        <Content>
          <div className="header">
            <p>Prioridade {priority.toLowerCase()}</p>
            <h1><span>{index + 1}.</span> {title}</h1>
          </div>
        </Content>

        <ProductsItens>
          <div className="content">
            {products.map(item => (
              <div>
                Titulo: {item.title}<br/>
                Quantidade: {item.amount}<br/>
                Seção: {item.section}<br/>
                Coletado: {item.collected ? 'Sim' : 'Não'}
              </div>
            ))}
          </div>
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