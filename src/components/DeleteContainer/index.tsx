import React from 'react'
import deleteList from '../../utils/deleteList';
import { DeleteProps } from '../../types/types';
import { Container } from './style';

const DeleteContainer: React.FC<DeleteProps> = ({index, setConfirmDelete, title}) => {

  const { deleted } = deleteList(index);

  return (
    <Container>
      <div className="content">
        <h1>Deseja deletar a lista "{title}"?</h1>
        <div className="buttons">
          <button onClick={deleted} className='del'>Deletar</button>
          <button onClick={() => setConfirmDelete(false)} className='cancel'>Cancelar</button>
        </div>
      </div>
    </Container>
  );
};

export default DeleteContainer;