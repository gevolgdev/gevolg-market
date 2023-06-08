import { useDispatch, useSelector } from "react-redux";
import { ListProps } from "../types/types";
import { RootState } from "../lib/redux/reducer";
import { addLists, removeList } from "../lib/redux/slices/listsSlice";
import { useNavigate } from "react-router-dom";

interface IndexProps {
  index: number;
};

const deleteList = (index: number) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const deleted = () => {
    dispatch(removeList(index + 1));
    navigate('/');
  };

  return { deleted };
};

export default deleteList;