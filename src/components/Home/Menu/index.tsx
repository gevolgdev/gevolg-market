import React, { Dispatch, SetStateAction, useState, useEffect } from 'react';
import { Buttons, Container, Content, MyLinks } from './style';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../lib/redux/reducer';
import { IoIosArrowBack } from 'react-icons/io';
import { BsGithub, BsLinkedin, BsInstagram } from 'react-icons/bs';
import { showSetName } from '../../../lib/redux/slices/setNameSlice';
import logo from '/logo-light.svg';
import UserSetName from '../../Initial/UserSetName';
import { Link } from 'react-router-dom';
import { download } from '../../../lib/redux/slices/downloadedSlice';

interface MenuProps {
  setOpenMenu: Dispatch<SetStateAction<boolean>>
};

const Menu: React.FC<MenuProps> = ({ setOpenMenu }) => {

  const [settingName, setSettingName] = useState<boolean>(false);
  const [pwa, setPwa] = useState<boolean>(false);
  const name: string = useSelector((state: RootState) => state.setNameSlice.name);
  const Dispatch = useDispatch();

  useEffect(() => {
    if ('serviceWorker' in navigator && window.matchMedia('(display-mode: standalone)').matches) {
      setPwa(true);
    } else setPwa(false);
  }, [])
  
  
  const links = {
    instagram: 'https://www.instagram.com/gevolgdev/',
    linkedin: 'https://www.linkedin.com/in/ricardo-pinelli/',
    github: 'https://github.com/gevolgdev',
  };

  function handleSettingName() {
    setSettingName(true);
  };
  
  return (
    <>
      { settingName && <UserSetName setOpenMenu={setOpenMenu}/> }

      <Container>
        <Content>
          <header>
            <img src={logo}/>
            <button onClick={ () => setOpenMenu(false) }><IoIosArrowBack/></button>
          </header>

          <h3>Bem-vindo(a),<br/> {name}!</h3>
          
          <Buttons>
            <button onClick={ () => (Dispatch(showSetName(false)), setOpenMenu(false))}>Como usar o app?</button>
            <button onClick={handleSettingName}>Trocar meu nome</button>
            <Link to='/dicas'>Dicas</Link>
            <Link to='/faq'>FAQ</Link>
            {
              pwa || <button onClick={ () => Dispatch(download(true))}>Baixar aplicativo</button>
            }
          </Buttons>

          <MyLinks>
            <a href={links.instagram} target='_blank'><BsInstagram/></a>
            <a href={links.github} target='_blank'><BsGithub/></a>
            <a href={links.linkedin} target='_blank'><BsLinkedin/></a>
          </MyLinks>

        </Content>

      </Container>
    </>
  );
};

export default Menu;