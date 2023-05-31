import { BoxName, Container, Cart } from './style';
import { MdOutlineShoppingCart } from 'react-icons/md';
import LOGO from '../../assets/logo-dark.png';

const Header = () => {

  const name: string = 'Ricardo'.charAt(0);

  return (
    <Container>
      <BoxName>{name}</BoxName>
      <img src={LOGO}/>
      <Cart>
        <div className="haveItems"/>
        <MdOutlineShoppingCart/>
      </Cart>
    </Container>
  );
};

export default Header;