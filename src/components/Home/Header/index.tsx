import { useState } from 'react';
import { BoxName, Container, Cart } from './style';
import { MdOutlineShoppingCart } from 'react-icons/md';
import LOGO from '../../../assets/logo-dark.svg';
import Menu from '../Menu';

interface NameProps {
  name: string;
};

const Header:React.FC<NameProps> = ({ name }) => {

  const [ openMenu, setOpenMenu ] = useState<boolean>(false);
  const letterName: string = name.charAt(0);
  const stock: number[] = [1];

  return (
    <>
      { openMenu && <Menu setOpenMenu={setOpenMenu}/> }
      <Container>
        <BoxName onClick={ () => setOpenMenu(true) }>{letterName}</BoxName>
        <img src={LOGO}/>
        <Cart>
          {stock.length > 0 && <div className="haveItems"/>}
          <MdOutlineShoppingCart/>
        </Cart>
      </Container>
    </>
  );
};

export default Header;