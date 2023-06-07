import { Link } from "react-router-dom";
import { Background, Container, Buttons } from "./style";
import IMAGE_BG from '../../assets/background-initial.png';
import LOGO from '../../assets/logo-dark.png';


const Initial: React.FC = () => {

  return (
    <>
      <Container>
        <Background image={IMAGE_BG}/>
        <div className="infos">
          <img src={LOGO}/>
          <h1>Organize suas compras de maneira prática e fácil.</h1> 
          <p>Simplifique suas compras. Adicione, organize e compartilhe sua lista com nosso aplicativo de lista de compras.</p>
        </div>
        <Buttons>
          <Link to='/' className="skip">Pular</Link>
          <button className="read">Ler mais</button>
        </Buttons>
      </Container>
    </>
  );
};

export default Initial;