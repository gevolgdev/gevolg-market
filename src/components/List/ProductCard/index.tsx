import { BsCheck } from 'react-icons/bs';
import { Product } from './style';
import Options from '../Options';
import useProduct from '../../../hooks/useProduct';

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
  
  return (
    <Product collected={isCollected} key={title}>
      <div>
        <button className='checkbox' onClick={ () => collected(i) }>
          {isCollected && <BsCheck/>}
        </button>
        <h1>( {amount === 0 ? '1' : amount} ) {title} - <span>{category}</span></h1>
      </div>

      <Options collected={isCollected} indexPage={index} indexEl={i} option={options}/>
      
    </Product>
  );
};

export default ProductCard;