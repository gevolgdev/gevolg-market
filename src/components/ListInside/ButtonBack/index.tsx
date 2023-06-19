import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsArrowLeftShort } from 'react-icons/bs';
import { Container } from './style';

interface ButtonProps {
  mode: string;
};

const ButtonBack: React.FC<ButtonProps> = ({ mode }) => {

  // const [ color, setColor ] = useState<string>('');

  const setModeColor = (el: string): string => {
    let color: string = '';
    if(el === 'light') {
      color = '#FAF8F0';
    } 
    else if(el === 'dark') {
      color = '#19191F';
    };

    return color;
  };


  const navigate = useNavigate();

  return (
    <Container onClick={() => navigate(-1)} color={setModeColor(mode)}>
      <BsArrowLeftShort/>
    </Container>
  );
};

export default ButtonBack;