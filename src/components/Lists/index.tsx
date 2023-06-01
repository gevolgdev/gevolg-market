import { ListProps } from "../../types/types";
import { useSelector } from 'react-redux';
import { Container, ListCard, Content } from "./style";
import { MdArrowOutward } from 'react-icons/md';
import { HiOutlineMinus } from 'react-icons/hi';
import { RootState } from "../../lib/redux/reducer";

const Lists = (): JSX.Element => {

  const lists: ListProps[] = useSelector((state: RootState) => state.listsSlice.slice(1));

  return (
    <>
      <Container>
        { 
          lists.length === 0
          ? <span className="list-empty">Crie uma lista de compras</span>
          : <>
              <span className="list-full">Listas de compras</span>
              <Content>
                {lists.map(item => (
                  <ListCard key={item.id}>
                    <div className="header">
                      <span>{item.priority}</span>
                      <MdArrowOutward/>
                    </div>
                    <h2>{item.title}</h2>
                    <p><HiOutlineMinus/> {item.date}</p>
                  </ListCard>
                ))}
              </Content>
            </>
        }
      </Container>
    </>
  )
};

export default Lists;