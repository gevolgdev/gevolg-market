import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addLists } from '../lib/redux/slices/listsSlice';
import { EventProps, ListProps } from '../types/types';
import { showModal } from '../lib/redux/slices/showModalSlice';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../lib/redux/reducer';

const useLists = () => {

  const lists: ListProps[] = useSelector((state: RootState) => state.listsSlice.slice(1));
  const INITIAL_VALUE: ListProps = { priority: '', title: '', color: '' };
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
  
  const openList = (index: number) => {
    const currentDataPage = lists[index];
    const currentTitlePage = currentDataPage.title;
    const path: string = currentTitlePage.split(' ').join('-');
    navigate(`/listas/${path}`, { state: { currentDataPage } });
  };

  return { openModal, closeModal, handleSaveLists, isAddList, openList };
};

export default useLists;