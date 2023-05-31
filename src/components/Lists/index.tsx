import { ListProps } from "../../types/types";
import { Container, ListCard, Content } from "./style";
import { MdArrowOutward } from 'react-icons/md';
import { HiOutlineMinus } from 'react-icons/hi';

const Lists = () => {

  const list: ListProps[] = [
    { id: 1, priority: 'media', title: 'Lista do mês', date: '31/05' },
    { id: 2, priority: 'alta', title: 'Lista de doces', date: '01/06' },
    { id: 3, priority: 'baixa', title: 'Lista de rolê', date: '30/05' },
  ];

  return (
    <>
      <Container>
        { 
          list.length === 0
          ? <span className="list-empty">Crie uma lista de compras</span>
          : <>
              <span className="list-full">Listas de compras</span>
              <Content>
                {list.map(item => (
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