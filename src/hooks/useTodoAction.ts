import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { removeTodoAction, toggleTodoAction } from "../actions";

const useTodoActions = (id: number) => {
  const dispatch = useDispatch();

  const onToggle = useCallback(
    (e: any) => {
      e.preventDefault();
      dispatch(toggleTodoAction(id));
    },
    [dispatch, id]
  );

  const onRemove = useCallback(() => {
    dispatch(removeTodoAction(id));
  }, [dispatch, id]);

  return { onToggle, onRemove };
};

export default useTodoActions;
