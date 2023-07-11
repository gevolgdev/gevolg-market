import React, { useState } from 'react';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { Container } from './style';
import { InfosProps } from '../../../../@types/types';

const ReadMore: React.FC<InfosProps> = ({ title, image, readmore, page = 0 }) => {

  const [ openInfos, setOpenInfos ] = useState<boolean>(false);

  const currentPageCircle = page + 1;

  return (
    <>
      <Container currentPageCircle={currentPageCircle}>
        { openInfos && 
          <div className="infos">
            <div className="content">
              <p>{readmore.split('\n').map((item, index) => (
                <React.Fragment key={index}>
                  {item}
                  <br/>
                </React.Fragment>
              ))}</p>
              <button onClick={ () => setOpenInfos(false) }>Entendi!</button>
            </div>
          </div>
        }
        <h1>
          <button onClick={ () => setOpenInfos(true) } className='more-infos'><AiOutlineInfoCircle/></button>
            <br/>
          {title}
        </h1>
        <img className='image-product' src={image}/>
        <div className='current-page'>
          <div className='circle'/>
          <div className='circle'/>
          <div className='circle'/>
          <div className='circle'/>
        </div>
      </Container>
    </>
  );
};

export default ReadMore;