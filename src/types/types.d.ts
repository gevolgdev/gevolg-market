
export interface ProductsProps {
  name: string;
  amount: number;
  collected: boolean;
};

export interface ListProps {
  index?: number;
  id?: number,
  priority: string;
  title: string;
  color: string;
  products?: ProductsProps[];
};  

export type EventProps = React.ChangeEvent<HTMLInputElement | HTMLSelectElement>;