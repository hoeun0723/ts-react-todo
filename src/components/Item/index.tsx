import React from "react";
import * as S from "./style";

interface IItemProps {
  index: number;
  text: string;
  done: boolean;
  onClick: Function;
}

const Item = ({ index, text, done, onClick }: IItemProps) => {
  return (
    <S.Item>
      <S.Text done={done} onClick={(e) => onClick(e, index)}>
        {text}
        <S.CheckBox checked={done} readOnly={true} />
        <S.CheckMark />
      </S.Text>
    </S.Item>
  );
};

export default Item;
