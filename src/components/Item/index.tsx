import React from "react";
import * as S from "./style";

import { Todo } from "../../types";
import useTodoActions from "../../hooks/useTodoAction";
interface IItemProps {
  todo: Todo;
}

const Item = ({ todo }: IItemProps) => {
  const { onToggle, onRemove } = useTodoActions(todo.id);
  return (
    <S.Item>
      <S.Text done={todo.done} onClick={onToggle}>
        {todo.text}
        <S.CheckBox checked={todo.done} readOnly={true} />
        <S.CheckMark />
      </S.Text>
      <S.Button onClick={onRemove}>&times;</S.Button>
    </S.Item>
  );
};

export default Item;
