import { ListProps } from "../../../types/types";
import { useSelector } from 'react-redux';
import { Container, Content } from "./style";
import { RootState } from "../../../lib/redux/reducer";
import ListCard from "../ListCard";

const Lists = () => {

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
                  <ListCard {...item} key={item.title} index={index}/>
                )).reverse()}
              </Content>
            </>
        }
      </Container>
    </>
  )
};

export default Lists;