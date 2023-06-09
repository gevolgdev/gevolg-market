import React from 'react'
import { useLocation } from 'react-router-dom'
import ButtonBack from '../ButtonBack';
import { Container, Header, Content } from './style';
import Logo from '../../assets/logo-light.png';
import { AiFillDelete } from 'react-icons/ai';
import deleteList from '../../utils/deleteList';

const BodyList: React.FC = () => {

  const location = useLocation();
  const { newCurrentPage } = location?.state;

  const { deleted } = deleteList(newCurrentPage.index);

  return (
    <>
      <Header color={newCurrentPage.color}>
        <ButtonBack/>
        <img src={Logo}/>
        <button className='delete' onClick={deleted}><AiFillDelete/></button>
      </Header>
      <Container>

        <Content>
          <div className="header">
            <span>Prioridade {newCurrentPage.priority.toLowerCase()}</span>
            <h1>{newCurrentPage.title}</h1>
            <h1>Index: {newCurrentPage.index}</h1>
          </div>
        </Content>
        
      </Container>
    </>
  );
};

export default BodyList;