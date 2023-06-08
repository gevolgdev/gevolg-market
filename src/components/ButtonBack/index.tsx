import { useNavigate } from 'react-router-dom';
import { BsArrowLeftShort } from 'react-icons/bs';
import { Container } from './style';

const ButtonBack = () => {

  const navigate = useNavigate();

  return (
    <Container onClick={() => navigate(`/`)}>
      <BsArrowLeftShort/>
    </Container>
  );
};

export default ButtonBack;