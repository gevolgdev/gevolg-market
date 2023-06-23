import { GrFormClose } from 'react-icons/gr';
import { Button, Container } from "./style";
import useLists from "../../hooks/useCreateLists";

const AddList = () => {

  const { handleSaveLists, isAddList, closeModal } = useLists();

  return (
    <Container>
      <div className="content">
        <div className="header">
          <span>Nova lista</span>
          <button onClick={closeModal}>
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
            <label>Cor da lista</label>
            <select onChange={handleSaveLists} id='color' defaultValue='--'>
              <option value='--'>Padrão</option>
              <option value='#1e40af'>Azul</option>
              <option value='#15803d'>Verde</option>
              <option value='#c026d3'>Rosa</option>
            </select>
          </div>
        </div>

        <Button onClick={isAddList}>Adicionar</Button>
      </div>
    </Container> 
  );
};

export default AddList;