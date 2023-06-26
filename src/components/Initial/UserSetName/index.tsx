import React, { ChangeEvent } from 'react'
import { Container } from './style';
import { useDispatch } from 'react-redux';
import { setName, showSetName } from '../../../lib/redux/slices/setNameSlice';
import logo from '../../../assets/logo-dark.svg';

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
        <h1>Qual é seu <br/> nome/apelido?</h1>
        <input onChange={handleSetName} type='text' placeholder='Digite aqui...'/>
      </div>
      <button onClick={handleShowSetName}>Continuar</button>
    </Container>
  )
}

export default UserSetName;