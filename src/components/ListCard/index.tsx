import { MdArrowOutward } from 'react-icons/md';
import { HiOutlineMinus } from 'react-icons/hi';
import { ListProps } from '../../types/types';
import { Container } from './style';
import useCreateLists from '../../hooks/useCreateLists';

const ListCard: React.FC<ListProps & {index: number}> = ({
  title, 
  priority, 
  color, 
  index }) => {

  const currentDate: string = new Date().toLocaleDateString();
  const { openList } = useCreateLists();

  return (
    <Container color={color} onClick={() => openList(index)}>
      <div className="header">
        <span>{priority}</span>
        <MdArrowOutward/>
      </div>
      <h2>{index + 1}. {title}</h2>
      <p><HiOutlineMinus/> {currentDate}</p>
    </Container>
  )
}

export default ListCard