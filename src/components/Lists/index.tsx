import { ListProps } from "../../types/types";
import { useSelector } from 'react-redux';
import { Container, ListCard, Content } from "./style";
import { MdArrowOutward } from 'react-icons/md';
import { HiOutlineMinus } from 'react-icons/hi';
import { RootState } from "../../lib/redux/reducer";
import useLists from "../../hooks/useLists";

const Lists = (): JSX.Element => {

  const currentDate: string = new Date().toLocaleDateString();
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
                {lists.map((item, index) => (
                  <ListCard key={index} color={item.color}>
                    <div className="header">
                      <span>{item.priority}</span>
                      <MdArrowOutward/>
                    </div>
                    <h2>{item.title}</h2>
                    <p><HiOutlineMinus/> {currentDate}</p>
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