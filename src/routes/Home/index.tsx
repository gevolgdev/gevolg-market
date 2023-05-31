import { Header } from '../../components';
import { Container, Search } from './style';
import { MdSearch } from 'react-icons/md';


const Home = () => {

  const name: string = 'Pinelli';

  return (
    <>
      <Header name={name}/>
      <Container>
        <div className="texts">
          <h1>Olá {name},</h1>
          <p>boas compras.</p>
        </div>
        <Search>
          <MdSearch/>
        </Search>
      </Container>
    </>
  );
};

export default Home;