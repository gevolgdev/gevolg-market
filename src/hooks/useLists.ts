import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addLists } from '../lib/redux/slices/listsSlice';
import { ListProps } from '../types/types';
import { showModal } from '../lib/redux/slices/showModalSlice';

type EventProps = React.ChangeEvent<HTMLInputElement | HTMLSelectElement>;

const useLists = () => {

  const INITIAL_VALUE: ListProps = { priority: '', title: '', date: '' };
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

  return {
    openModal,
    closeModal,
    handleSaveLists,
    isAddList,
  };
};

export default useLists;