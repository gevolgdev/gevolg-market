import { useState } from 'react';
import { Link } from "react-router-dom";
import { Background, Container, Buttons } from "./style";
import IMAGE_BG from '../../assets/background-initial.png';
import LOGO from '../../assets/logo-dark.svg';
import UserSetName from './UserSetName';


const Initial: React.FC = () => {

  const [showSetName, setShowSetName] = useState<boolean>(false);

  return (
    <>
      {showSetName && <UserSetName/>}
      <Container>
        <Background image={IMAGE_BG}/>
        <div className="infos">
          <img src={LOGO}/>
          <h1>Organize suas compras de maneira prática e fácil.</h1> 
          <p>Simplifique suas compras. Adicione, organize e compartilhe sua lista com nosso aplicativo de lista de compras.</p>
        </div>
        <Buttons>
          <button onClick={() => setShowSetName(true)} className="skip">Pular</button>
          <button className="read">Ler mais</button>
        </Buttons>
      </Container>
    </>
  );
};

export default Initial;