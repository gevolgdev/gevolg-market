import { BoxName, Container, Cart } from './style';
import { MdOutlineShoppingCart } from 'react-icons/md';
import LOGO from '../../assets/logo-dark.png';

const Header = () => {

  const name: string = 'Ricardo'.charAt(0);
  const stock: number[] = [1];

  return (
    <Container>
      <BoxName>{name}</BoxName>
      <img src={LOGO}/>
      <Cart>
        {stock.length > 0 && <div className="haveItems"/>}
        <MdOutlineShoppingCart/>
      </Cart>
    </Container>
  );
};

export default Header;