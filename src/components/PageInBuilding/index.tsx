import React from 'react'
import { Container } from './style'
import { BsGearWideConnected } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { Wrapper } from '../../style/GlobalStyle';

const PageInBuilding = () => {
  return (
    <Container>
      <span><BsGearWideConnected/></span>
      <h1>Desculpe, essa página está em contrução, volte mais tarde!</h1>
      <Link to='/'>Voltar para o início</Link>
    </Container>
  )
}

export default PageInBuilding