import React, {useState} from 'react'
import { useLocation } from 'react-router-dom'
import ButtonBack from '../../components/ListInside/ButtonBack';
import { Container, Header, Content, ProductsItens, Buttons } from './style';
import Logo from '../../assets/logo-light.svg';
import { AiFillDelete } from 'react-icons/ai';
import DeleteContainer from '../../components/ListInside/DeleteContainer';
import addProductList from '../../utils/addProductList';
import AddingProduct from '../../components/ListInside/AddingProduct';

const List: React.FC = () => {

  const [confirmDelete, setConfirmDelete] = useState<boolean>(false);
  const { addProduct, productForm, setProductForm } = addProductList();

  const location = useLocation();
  const { newCurrentPage } = location?.state;
  const {color, priority, index, title} = newCurrentPage;

  return (
    <>
      { confirmDelete && <DeleteContainer 
        index={index} 
        setConfirmDelete={setConfirmDelete} 
        title={title}
      /> }

      { productForm && <AddingProduct setProductForm={setProductForm}/> }

      <Header color={ color }>
        <ButtonBack/>
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

          </div>
        </ProductsItens>

        <Buttons>
          <button className="manager">Gerenciar</button>
          <button onClick={addProduct} className="add">Adicionar</button>
        </Buttons>

      </Container>
      
    </>
  );
};

export default List;