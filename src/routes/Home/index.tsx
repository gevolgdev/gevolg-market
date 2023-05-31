import { Header } from '../../components';
import Lists from '../../components/Lists';
import { AddButton, Container, Search, WelcomeHeader } from './style';
import { MdSearch, MdAdd } from 'react-icons/md';


const Home = () => {

  const name: string = 'Pinelli';

  return (
    <>
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

      <AddButton>
        <div>
          <MdAdd/>
        </div>
      </AddButton>
    </>
  );
};

export default Home;