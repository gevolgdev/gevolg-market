import React, { ChangeEvent, Dispatch, SetStateAction } from 'react'
import { Container } from './style';
import { useDispatch } from 'react-redux';
import { setName, showSetName } from '../../../lib/redux/slices/setNameSlice';
import logo from '/logo-dark.svg';

interface UserSetNameProps {
  setOpenMenu?: Dispatch<SetStateAction<boolean>>
};

const UserSetName: React.FC<UserSetNameProps> = ({ setOpenMenu }) => {

  const Dispatch = useDispatch();

  function handleSetName(e: ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    Dispatch(setName(value));
  };

  function handleShowSetName() {
    Dispatch(showSetName(true));
    setOpenMenu && setOpenMenu(false);
  };

  return (
    <Container>
      <img src={logo}/>
        <div className='content'>
          <h1>Qual é seu <br/> nome/apelido?</h1>
          <input onChange={handleSetName} type='text' placeholder='Digite aqui...'/>
          <button onClick={handleShowSetName}>Continuar</button>
        </div>
    </Container>
  )
}

export default UserSetName;