import { useCallback } from "react";
import { addTodoAction } from "../actions";
import { useDispatch } from "react-redux";

const useAddTodo = () => {
  const dispatch = useDispatch();
  return useCallback((text: any) => dispatch(addTodoAction(text)), [dispatch]);
};

export default useAddTodo;
