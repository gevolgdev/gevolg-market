import React from 'react';
import { Container } from './style';
import Image from '../../../../assets/imgLeadMore_1.png';
import { InfosProps } from '../../../../types/types';

const ReadMore: React.FC<InfosProps> = ({ title, image, readmore, page = 0 }) => {

  const currentPageCircle = page + 1;

  return (
    <Container currentPageCircle={currentPageCircle}>
      <h1>{title}</h1>
      <img className='image-product' src={image}/>
      <div className='current-page'>
        <div className='circle'/>
        <div className='circle'/>
        <div className='circle'/>
        <div className='circle'/>
      </div>
    </Container>
  );
};

export default ReadMore;