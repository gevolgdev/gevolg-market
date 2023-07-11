import { useDispatch } from "react-redux";
import { DeleteProps } from "../@types/types";
import { removeList } from "../lib/redux/slices/listsSlice";
import { useNavigate } from "react-router-dom";

interface DeleteListResult {
  deleted: () => void;
};

const deleteList = (index: number): DeleteListResult => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const deleted = () => {
    dispatch(removeList(index + 1));
    navigate('/');
  };

  return { deleted };
};

export default deleteList;