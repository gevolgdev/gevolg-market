import React from 'react';
import { BiTrash } from 'react-icons/bi';
import { BsThreeDots } from 'react-icons/bs';
import { FaRegEdit } from 'react-icons/fa';
import { IoFileTray } from 'react-icons/io5';
import useProduct from '../../../hooks/useProduct';
import { Container } from './style';

interface OptionsProps {
  indexPage: number;
  indexEl: number;
  option: boolean;
  collected: boolean;
};

const Options: React.FC<OptionsProps> = ({ indexPage, indexEl, option, collected}) => {

  const { options, removeProductList, archive } = useProduct(indexPage);
  return (
    <Container collected={collected}>
      { option &&
        <div className='options'>
          <button onClick={() => {archive(indexPage, indexEl)}} className='edit'>
            <IoFileTray/>
          </button>

          <button onClick={() => {}} className='edit'>
            <FaRegEdit/>
          </button>
          
          <button onClick={() => removeProductList(indexPage, indexEl)} className='delete'>
            <BiTrash/>
          </button> 
        </div>
      }
      <button onClick={() => options(indexEl)} className='option-button'>
        <BsThreeDots/>
      </button>
    </Container>
  );
};

export default Options;