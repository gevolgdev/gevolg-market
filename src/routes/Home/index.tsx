import { useState } from 'react';
import { AddList, Header } from '../../components';
import Lists from '../../components/Lists';
import { AddButton, Container, Search, WelcomeHeader } from './style';
import { MdSearch, MdAdd } from 'react-icons/md';


const Home = (): JSX.Element => {

  const [showAddList, setShowAddList] = useState<boolean>(false);

  const name: string = 'Ricardo';

  const handleAddList = () => setShowAddList(true);

  return (
    <>
      {showAddList && <AddList setShowAddList={setShowAddList}/>}
      <Header name={name}/>
      <Container>
        <WelcomeHeader>
          <div className="texts">
            <h1>Olá {name},</h1>
            <p>boas compras.</p>
          </div>
          <Search>
            <MdSearch/>
          </Search>
        </WelcomeHeader>

        <Lists/>
      </Container>

      <AddButton onClick={handleAddList}>
        <div>
          <MdAdd/>
        </div>
      </AddButton>
    </>
  );
};

export default Home;