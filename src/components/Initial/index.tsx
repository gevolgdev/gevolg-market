import { useState } from 'react';
import { Link } from "react-router-dom";
import { Background, Container, Buttons } from "./style";
import IMAGE_BG from '../../assets/background-initial.png';
import LOGO from '../../assets/logo-dark.svg';
import UserSetName from './UserSetName';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../lib/redux/reducer';
import { showSetName } from '../../lib/redux/slices/setNameSlice';


const Initial: React.FC = () => {

  const [showSetNameState, setShowSetName] = useState<boolean>(false);
  const name: string = useSelector((state: RootState) => state.setNameSlice.name);
  const Dispatch = useDispatch();

  function skipRoute() {
    if(name === '') setShowSetName(true);
    if(name) Dispatch(showSetName(true));
  }

  return (
    <>
      {showSetNameState && <UserSetName/>}
      <Container>
        <Background image={IMAGE_BG}/>
        <div className="infos">
          <img src={LOGO}/>
          <h1>Organize suas<br/> compras de maneira<br/> prática e fácil.</h1> 
          <p>Simplifique suas compras. Adicione, organize e compartilhe sua lista com nosso aplicativo de lista de compras.</p>
        </div>
        <Buttons>
          <button onClick={skipRoute} className="skip">Pular</button>
          <button className="read">Ler mais</button>
        </Buttons>
      </Container>
    </>
  );
};

export default Initial;