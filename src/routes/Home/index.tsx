import { AddList, Header } from '../../components';
import Lists from '../../components/Lists';
import { AddButton, Container, Search, WelcomeHeader } from './style';
import { useSelector } from 'react-redux';
import { MdSearch, MdAdd } from 'react-icons/md';
import useLists from '../../hooks/useLists';
import { SelectShowModal, showModal } from '../../lib/redux/slices/showModalSlice';
import { RootState } from '../../lib/redux/reducer';


const Home = (): JSX.Element => {

  const { openModal } = useLists();
  const showModalList = useSelector((state: RootState) => state.showModalSlice);
  
  const name: string = 'Ricardo';

  return (
    <>
      {showModalList.active && <AddList/>}
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

      <AddButton onClick={openModal}>
        <div>
          <MdAdd/>
        </div>
      </AddButton>
    </>
  );
};

export default Home;