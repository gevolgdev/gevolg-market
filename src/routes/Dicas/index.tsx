import React from 'react';
import { Wrapper } from '../../style/GlobalStyle';
import { Container, Content } from './style';
import { ButtonBack } from '../../components/List';
import logo from '/logo-dark.svg';
import { useSelector } from 'react-redux';
import { RootState } from '../../lib/redux/reducer';
import TipCard from '../../components/Tips/TipCard';
import { tips } from './dataTips';

const Dicas = () => {

  const name: string = useSelector((state: RootState) => state.setNameSlice.name);

  return (
    <Wrapper>
      <Container>

        <header>
          <ButtonBack mode={'dark'}/>
          <img src={logo}/>
        </header>

        <Content>
          <div className="texts">
            <h1>Olá {name},</h1>
            <p>Veja algumas dicas.</p>
          </div>

          <div className="cards">
            {tips.map(item => (
              <TipCard {...item}/>
            ))}
          </div>
        </Content>

      </Container>
    </Wrapper>
  );
};

export default Dicas;