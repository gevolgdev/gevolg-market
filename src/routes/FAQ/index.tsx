import React from 'react';
import logo from '/logo-dark.svg';
import { Container } from './style';
import { ButtonBack } from '../../components/List';
import { useSelector } from 'react-redux';
import { RootState } from '../../lib/redux/reducer';
import BasicAccordion from '../../components/BasicAccordion';
import { questions } from './data-questions';

const Faq = () => {

  const name: string = useSelector((state: RootState) => state.setNameSlice.name);

  return (
    <Container>
      <header>
        <ButtonBack mode={'dark'}/>
        <img src={logo}/>
      </header>

      <div className="texts">
        <h1>Olá {name},</h1>
        <p>tire suas dúvidas.</p>
      </div>

      <div className="faq">
        {questions.map((item, index) => (
          <BasicAccordion key={index} {...item}/>
        ))}
      </div>
    </Container>
  );
};

export default Faq;