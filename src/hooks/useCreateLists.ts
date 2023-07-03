import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addLists } from '../lib/redux/slices/listsSlice';
import { EventProps, ListProps } from '../types/types';
import { showModal } from '../lib/redux/slices/showModalSlice';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../lib/redux/reducer';

const useLists = () => {

  const lists: ListProps[] = useSelector((state: RootState) => state.listsSlice.slice(1));
  const INITIAL_VALUE: ListProps = { priority: '', title: '', color: '', date: '', products: [] };
  const [newList, setNewList] = useState<ListProps>(INITIAL_VALUE);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const openModal = () => dispatch(showModal({active: true}));
  const closeModal = () => dispatch(showModal({active: false}));
  
  const handleSaveLists = (event: EventProps) => {
    const { id, value } = event.target;
    setNewList(prev => ({...prev, [id]: value}));
  };
  
  const isAddList = (): void => {
    dispatch(addLists(newList));
    closeModal();
  };
  
  const openList = (title: string) => {

    let index = lists.findIndex(item => item.title === title);

    const currentDataPage: ListProps = lists[index];

    const indexInsert = {index: index};
    const newCurrentPage = Object.assign(indexInsert, currentDataPage);

    const path: string = title.split(' ').join('-');
    navigate(`/listas/${path}`, { state: { newCurrentPage } });
  };

  return { openModal, closeModal, handleSaveLists, isAddList, openList };
};

export default useLists;