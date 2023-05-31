import { BoxName, Container, Cart } from './style';
import { MdOutlineShoppingCart } from 'react-icons/md';
import LOGO from '../../assets/logo-dark.png';

interface NameProps {
  name: string;
};

const Header:React.FC<NameProps> = ({name}) => {

  const letterName: string = name.charAt(0);
  const stock: number[] = [1];

  return (
    <Container>
      <BoxName>{letterName}</BoxName>
      <img src={LOGO}/>
      <Cart>
        {stock.length > 0 && <div className="haveItems"/>}
        <MdOutlineShoppingCart/>
      </Cart>
    </Container>
  );
};

export default Header;