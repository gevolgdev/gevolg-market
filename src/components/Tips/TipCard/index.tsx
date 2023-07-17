import React from 'react'
import { Container } from './style'
import { AiOutlineRead } from 'react-icons/ai';
import { BsLightbulbFill } from 'react-icons/bs';
import { HiArrowSmLeft } from 'react-icons/hi';

interface TipProps {
  time: number;
  title: string;
  subtitle: string;
  text: string;
};

const TipCard: React.FC<TipProps> = ({ title, subtitle, text, time }) => {

  const [ openText, setOpenText ] = React.useState<boolean>(false);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'auto'
    });
  };

  return (
    <Container>
      
      { openText && 
        <div className="text-container">
          <button className='button-ok' onClick={ () => setOpenText(false) }>
            <HiArrowSmLeft/> Dicas
          </button>
          <div className="text">
            <span>{time} min de leitura</span>
            <h2>{title}</h2>
            <p>{text.split('\n').map(item => (
              <>
                {item}
                <br/>
              </>
            ))}</p>
          </div>
        </div>
      }
      <div className="content">
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
      <button onClick={ () => (setOpenText(true), scrollToTop()) }>
        <AiOutlineRead/>
      </button>
    </Container>
  );
};

export default TipCard;