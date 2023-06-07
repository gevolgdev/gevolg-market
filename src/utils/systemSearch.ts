import { useState } from 'react';
import { useSelector } from 'react-redux';
import { EventProps, ListProps } from '../types/types';
import { RootState } from '../lib/redux/reducer';

const systemSearch = () => {

  const [keywordSearch, setKeywordSearch] = useState<string>('');
  const [searching, setSearching] = useState<boolean>(false);
  const lists = useSelector((state: RootState) => state.listsSlice.slice(1));

  const handleSearch = () => {
    setSearching(!searching);
    setKeywordSearch('');
  };

  const changeSearch = (event: EventProps) => {
    const { value } = event.target;
    setKeywordSearch(value);
  };

  let resultSearch: ListProps[] = lists.filter((item: ListProps) => {
    if(keywordSearch === '') return;
    if(item.title.toLocaleLowerCase().includes(keywordSearch.toLocaleLowerCase())) return item.title;
  });
  
  return { searching, resultSearch, handleSearch, changeSearch };
};

export default systemSearch;