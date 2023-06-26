import { AddList, Header } from '../../components/Home';
import { Initial } from '../../components';
import Lists from '../../components/Home/Lists';
import { AddButton, Container, Search, WelcomeHeader, SearchResults } from './style';
import { GrFormClose } from 'react-icons/gr';
import { useDispatch, useSelector } from 'react-redux';
import { MdSearch, MdAdd } from 'react-icons/md';
import useLists from '../../hooks/useCreateLists';
import { RootState } from '../../lib/redux/reducer';
import systemSearch from '../../utils/systemSearch';
import ListCard from '../../components/Home/ListCard';
import { showSetName } from '../../lib/redux/slices/setNameSlice';


const Home: React.FC = () => {

  const { openModal } = useLists();
  const { searching, handleSearch, changeSearch, resultSearch } = systemSearch();
  const showModalList = useSelector((state: RootState) => state.showModalSlice);  
  const setName = useSelector((state: RootState) => state.setNameSlice);  

  const Dispatch = useDispatch();
  function handleShowSetName() {
    Dispatch(showSetName(false));
  };
  
  const name: string = setName.name;

  return (
    <>
      {setName.set || <Initial/>}

      {showModalList.active && <AddList/>}
      <Header name={name.toUpperCase()}/>
      <Container>
        <WelcomeHeader toCenterDiv={searching}>
          { searching || 
            <div className="texts">
              <h1>Olá {name},</h1>
              <p>boas compras.</p>
            </div>
          }
          <Search onClick={searching ? undefined : handleSearch}>
            <MdSearch/>
            { searching && (
              <>
                <input type='text' onChange={changeSearch}/>
                <button onClick={handleSearch}><GrFormClose/></button>
              </>
            ) }
          </Search>
        </WelcomeHeader>

        { searching && 
          <SearchResults>
            {resultSearch.map((item, index) => (
              <ListCard {...item} key={index} index={index}/>
            ))}
          </SearchResults>
        }

        { searching || <Lists/> }
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