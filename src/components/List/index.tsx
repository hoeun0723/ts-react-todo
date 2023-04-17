import React from "react";
import * as S from "./style";
import Item from "../Item";

import useTodos from "../../hooks/useTodos";

const List = () => {
  const todos = useTodos();

  return (
    <S.List>
      {todos.map((todo) => (
        <Item todo={todo} key={todo.id} />
      ))}
    </S.List>
  );
};

export default List;
