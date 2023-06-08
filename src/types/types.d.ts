export interface ListProps {
  index?: number;
  id?: number,
  priority: string;
  title: string;
  color: string;
};  

export type EventProps = React.ChangeEvent<HTMLInputElement | HTMLSelectElement>;