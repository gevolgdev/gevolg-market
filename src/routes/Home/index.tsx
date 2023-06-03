import { AddList, Header } from '../../components';
import Lists from '../../components/Lists';
import { AddButton, Container, Search, WelcomeHeader } from './style';
import { GrFormClose } from 'react-icons/gr';
import { useSelector } from 'react-redux';
import { MdSearch, MdAdd } from 'react-icons/md';
import useLists from '../../hooks/useLists';
import { RootState } from '../../lib/redux/reducer';
import systemSearch from '../../utils/systemSearch';


const Home = (): JSX.Element => {

  const { openModal } = useLists();
  const { searching, handleSearch, changeSearch } = systemSearch();
  const showModalList = useSelector((state: RootState) => state.showModalSlice);
  
  const name: string = 'Ricardo';

  return (
    <>
      {showModalList.active && <AddList/>}
      <Header name={name}/>
      <Container>
        <WelcomeHeader toCenterDiv={searching}>
          { searching || 
            <div className="texts">
              <h1>Olá {name},</h1>
              <p>boas compras.</p>
            </div>
          }
          <Search>
            <MdSearch onClick={searching ? undefined : handleSearch}/>
            { searching && (
              <>
                <input type='text' onChange={changeSearch}/>
                <button onClick={handleSearch}><GrFormClose/></button>
              </>
            ) }
          </Search>
        </WelcomeHeader>

        {searching || <Lists/>}
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