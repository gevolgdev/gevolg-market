import { MdArrowOutward } from 'react-icons/md';
import { HiOutlineMinus } from 'react-icons/hi';
import { ListProps } from '../../../types/types';
import { Container } from './style';
import useCreateLists from '../../../hooks/useCreateLists';

const ListCard: React.FC<ListProps & {index: number}> = ({
  title, 
  priority, 
  color, 
  index,
  date
}) => {

  const { openList } = useCreateLists();

  return (
    <Container color={color} onClick={() => openList(title)}>
      <div className="header">
        <span>{priority}</span>
        <MdArrowOutward/>
      </div>
      <h2>{index + 1}. {title}</h2>
      <p><HiOutlineMinus/> {date}</p>
    </Container>
  )
}

export default ListCard