import React, { ReactNode } from 'react';
import { Container } from './style';
import { Wrapper } from '../../style/GlobalStyle';
import logo from '../../assets/logo-dark.svg';

interface DownloadProps {
  children: ReactNode;
}

const Download: React.FC<DownloadProps> = ({ children }) => {
  return (
    <Wrapper>
      <Container>
        <img src={logo}/>
        <div className="content">
          <h1>Deseja instalar o aplicativo?</h1>
          <div className="buttons">
            { children }
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

export default Download;