import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addLists } from '../lib/redux/slices/listsSlice';
import { EventProps, ListProps } from '../types/types';
import { showModal } from '../lib/redux/slices/showModalSlice';

const useLists = () => {

  const INITIAL_VALUE: ListProps = { priority: '', title: '', color: '' };
  const [newList, setNewList] = useState<ListProps>(INITIAL_VALUE);
  const dispatch = useDispatch();

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

  return { openModal, closeModal, handleSaveLists, isAddList, };
};

export default useLists;