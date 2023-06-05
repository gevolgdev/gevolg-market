import { AddList, Header } from '../../components';
import Lists from '../../components/Lists';
import { AddButton, Container, Search, WelcomeHeader, SearchResults } from './style';
import { GrFormClose } from 'react-icons/gr';
import { useSelector } from 'react-redux';
import { MdSearch, MdAdd } from 'react-icons/md';
import useLists from '../../hooks/useLists';
import { RootState } from '../../lib/redux/reducer';
import systemSearch from '../../utils/systemSearch';
import ListCard from '../../components/ListCard';
import { ListProps } from '../../types/types';


const Home = (): JSX.Element => {

  const { openModal } = useLists();
  const { searching, handleSearch, changeSearch, resultSearch } = systemSearch();
  const showModalList = useSelector((state: RootState) => state.showModalSlice);
  const list: ListProps[] = useSelector((state: RootState) => state.listsSlice.slice(1));
  
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

        { searching && <SearchResults>
          {resultSearch.map((item, index) => (
            <ListCard {...item} key={index}/>
          ))}
        </SearchResults>}

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