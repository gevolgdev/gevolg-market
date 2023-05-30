import { BoxName, Container } from './style';
import LOGO from '../../assets/logo-dark.png';

const Header = () => {

  const name: string = 'Ricardo'.charAt(0);

  return (
    <Container>
      <BoxName>{name}</BoxName>
      <img src={LOGO}/>
    </Container>
  );
};

export default Header;