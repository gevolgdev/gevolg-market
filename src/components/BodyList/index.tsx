import React, { Key } from 'react'
import { Path, useLocation, useParams } from 'react-router-dom'
import { ListProps } from '../../types/types';

interface Location extends Path {
  state: any;
  key: Key;
}

const BodyList: React.FC = () => {

  const { id } = useParams();
  const location = useLocation();
  const { currentDataPage } = location.state;

  return (
    <div>
      Detalhes da lista de compras: {id}
      <span>{}</span>
    </div>
  )
}

export default BodyList