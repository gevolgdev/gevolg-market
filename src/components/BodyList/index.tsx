import React, {useState} from 'react'
import { useLocation } from 'react-router-dom'
import ButtonBack from '../ButtonBack';
import { Container, Header, Content } from './style';
import Logo from '../../assets/logo-light.svg';
import { AiFillDelete } from 'react-icons/ai';
import DeleteContainer from './DeleteContainer';

const BodyList: React.FC = () => {

  const [confirmDelete, setConfirmDelete] = useState<boolean>(false);

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
      </Container>
      
    </>
  );
};

export default BodyList;