import React from "react";
import * as S from "./style";
import Item from "../Item";

interface IListProps {
  items: { text: string; done?: boolean }[];
}

const List = ({ items }: IListProps) => {
  return (
    <S.List>
      {items.map(({ text, done = false }, i) => {
        return <Item key={"todo" + i} text={text} done={done} />;
      })}
    </S.List>
  );
};

export default List;
