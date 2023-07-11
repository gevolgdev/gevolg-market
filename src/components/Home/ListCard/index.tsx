import { MdArrowOutward } from 'react-icons/md';
import { BsCalendar2CheckFill } from 'react-icons/bs';
import { ListProps } from '../../../@types/types';
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
      <h2>{title}</h2>
      <p><BsCalendar2CheckFill/> {date}</p>
    </Container>
  )
}

export default ListCard