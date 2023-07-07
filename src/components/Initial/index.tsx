import { useState } from 'react';
import { Background, Container, Buttons } from "./style";
import IMAGE_BG from '../../assets/background-initial.png';
import LOGO from '../../assets/logo-dark.svg';
import UserSetName from './UserSetName';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../lib/redux/reducer';
import { showSetName } from '../../lib/redux/slices/setNameSlice';
import Instructions from './Instructions';


const Initial: React.FC = () => {

  const [openName, setOpenName] = useState<boolean>(false);
  const [leadMore, setLeadMore] = useState<boolean>(false);

  const name: string = useSelector((state: RootState) => state.setNameSlice.name);
  const Dispatch = useDispatch();

  function skipRoute() {
    if(!name) setOpenName(true);
    else Dispatch(showSetName(true));
  };

  return (
    <>
      {openName && <UserSetName/>}
      { leadMore ? 
        <Instructions skipRoute={skipRoute}/>
        :
        <Container>
          <Background image={IMAGE_BG}/>
          <div className="infos">
            <img src={LOGO}/>
            <span>
              <h1>Organize suas<br/> compras de maneira<br/> prática e fácil.</h1> 
              <p>Simplifique suas compras. Adicione, organize e compartilhe sua lista com nosso aplicativo de lista de compras.</p>
            </span>
            <Buttons>
              <button onClick={skipRoute} className="skip">Pular</button>
              <button onClick={ () => setLeadMore(true)} className="read">Ler mais</button>
            </Buttons>
          </div>
        </Container>
      }
    </>
  );
};

export default Initial;