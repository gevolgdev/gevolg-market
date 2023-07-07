import { Dispatch } from "react";

export interface ListProps {
  index?: number;
  id?: number,
  priority: string;
  title: string;
  color: string;
  date: string;
  products: ProductListProps[];
};  

export type EventProps = React.ChangeEvent<HTMLInputElement | HTMLSelectElement>;

export interface DeleteProps {
  title: string;
  index: number;
  setConfirmDelete: Dispatch<React.SetStateAction<boolean>>;
};

export interface ProductListProps {
  title: string;
  amount: number;
  measurements: string;
  category: string;
  index: number;
  collected: boolean;
  options: boolean;
  archive: boolean;
};

export interface EditInfosProps {
  title: string;
  amount: number;
  category: string;
  measurements: string;
}

export interface InfosProps {
  title: string,
  image: string,
  readmore: string,
  page?: number,
};