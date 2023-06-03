import { MdArrowOutward } from 'react-icons/md';
import { HiOutlineMinus } from 'react-icons/hi';
import { ListProps } from '../../types/types';
import { Container } from './style';

const ListCard: React.FC<ListProps> = ({title, priority, color}) => {

  const currentDate: string = new Date().toLocaleDateString();

  return (
    <Container color={color}>
      <div className="header">
        <span>{priority}</span>
        <MdArrowOutward/>
      </div>
      <h2>{title}</h2>
      <p><HiOutlineMinus/> {currentDate}</p>
    </Container>
  )
}

export default ListCard