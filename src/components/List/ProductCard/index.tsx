import { Dispatch, useState } from 'react';
import { BsCheck } from 'react-icons/bs';
import { Product } from './style';
import Options from '../Options';
import useProduct from '../../../hooks/useProduct';
import EditingProduct from '../EditingProduct';

interface ProductCardProps {
  isCollected: boolean;
  title: string;
  amount: number;
  category: string;
  options: boolean;
  i: number;
  index: number;
};

const ProductCard = ({ isCollected, title, amount, category, options, i, index }: ProductCardProps) => {

  const { collected } = useProduct(index);
  const [openEdit, setOpenEdit] = useState<boolean>(false);
  
  return (
    <>
      {openEdit && <EditingProduct 
        setOpenEdit={setOpenEdit}
        indexMain={index}
        indexChild={i}
        title={title}
        amount={amount}
        category={category}
      />}
      <Product collected={isCollected} key={title}>
        <div>
          <button className='checkbox' onClick={ () => collected(i) }>
            {isCollected && <BsCheck/>}
          </button>
          <h1>( {amount === 0 ? '1' : amount} ) {title} - <span>{category}</span></h1>
        </div>

        <Options collected={isCollected} indexPage={index} indexEl={i} option={options} setOpenEdit={setOpenEdit}/>
        
      </Product>
    </>
  );
};

export default ProductCard;