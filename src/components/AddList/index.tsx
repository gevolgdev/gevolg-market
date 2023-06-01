import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addLists } from '../../lib/redux/lists/listsSlice';
import { SetStateAction } from "react";
import { GrFormClose } from 'react-icons/gr';
import { Button, Container } from "./style";
import { ListProps } from '../../types/types';

type setShowInputsFunction = React.Dispatch<SetStateAction<boolean>>;
type EventProps = React.ChangeEvent<HTMLInputElement | HTMLSelectElement>;

interface ShowProps {
  setShowAddList: setShowInputsFunction;
};

const AddList: React.FC<ShowProps> = ({setShowAddList}) => {

  const INITIAL_VALUE: ListProps = { priority: '', title: '', date: '' };
  const [newList, setNewList] = useState<ListProps>(INITIAL_VALUE);
  const dispatch = useDispatch();

  const closeAddList = () => setShowAddList(false);

  const handleSaveLists = (event: EventProps) => {
    const { id, value } = event.target;
    setNewList(prev => ({...prev, [id]: value}));
  };

  const isAddList = (): void => {
    dispatch(addLists(newList));
    closeAddList();
  };

  return (
    <Container>
      <div className="content">
        <div className="header">
          <span>Nova lista</span>
          <button onClick={closeAddList}>
            <GrFormClose/>
          </button>
        </div>

        <div className="inputs">
          <div>
            <label>Nome da lista</label>
            <input onChange={handleSaveLists} id='title' type='text' maxLength={25}/>
          </div>
          <div>
            <label>Prioridade</label>
            <select onChange={handleSaveLists} id='priority' defaultValue='--'>
              <option value="--" disabled>--</option>
              <option value="Baixa">Baixa</option>
              <option value="Média">Média</option>
              <option value="Alta">Alta</option>
            </select>
          </div>
          <div>
            <label>Data</label>
            <input onChange={handleSaveLists} id='date' type='date'/>
          </div>
        </div>

        <Button onClick={isAddList}>Adicionar</Button>
      </div>
    </Container> 
  );
};

export default AddList;