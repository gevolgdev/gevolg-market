import React, { ChangeEvent } from 'react'
import { Container } from './style';
import { useDispatch } from 'react-redux';
import { setName, showSetName } from '../../lib/redux/slices/setNameSlice';
import logo from '../../assets/logo-light.svg';

const UserSetName = () => {

  const Dispatch = useDispatch();

  function handleSetName(e: ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    Dispatch(setName(value));
  };

  function handleShowSetName() {
    Dispatch(showSetName(true));
  };

  return (
    <Container>
      <img src={logo}/>
      <div className='content'>
        <h1>Bem-vindos(as),</h1>
        <p>
          ao melhor aplicativo para organizar suas listas de compras e salva-las 
          para usa-la posteriormente. Digite seu primeiro nome ou apelido.
        </p>
        <input onChange={handleSetName} type='text' placeholder='Digite aqui...'/>
      </div>
      <button onClick={handleShowSetName}>Concluir</button>
    </Container>
  )
}

export default UserSetName;