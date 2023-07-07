import React, { useState } from 'react'
import { Container } from './style'
import ReadMore from './ReadMore';
import LOGO from '../../../assets/logo-dark.svg';
import { infos } from './dataInformations';
import { InfosProps } from '../../../types/types';


interface InstructionsProps {
  skipRoute: () => void;
};

const Instructions: React.FC<InstructionsProps> = ({ skipRoute }) => {

  const [page, setPage] = useState<number>(0);

  const currentPage: InfosProps = infos[page];

  
  function goButton() {
    if(page < 3) return setPage(prev => ++prev);
    if(page === 3) return skipRoute();
  }

  function backButton() {
    if(page > 0) return setPage(prev => --prev);
    else return skipRoute();
  }

  return (
    <Container>
      <img className='logo' src={LOGO}/>
      <ReadMore
        title={currentPage.title}
        image={currentPage.image}
        readmore={currentPage.readmore}
        page={page}
      />
      {/* <button onClick={skipRoute}>Pular</button> */}
      <div className='buttons'>
        <button className='read' onClick={ backButton }>
          {page > 0 ? 'Voltar' : 'Sair'}
        </button>
        <button className='go' onClick={ goButton }>
          {page < 3 ? 'Proximo' : 'Obrigado!'}
        </button>
      </div>
    </Container>
  )
}

export default Instructions