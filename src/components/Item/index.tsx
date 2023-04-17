import React from "react";
import * as S from "./style";

interface IItemProps {
  text: string;
  done: boolean;
}

const Item = ({ text, done }: IItemProps) => {
  return (
    <S.Item>
      <S.Text done={done}>
        {text}
        <S.CheckBox defaultChecked={done} />
        <S.CheckMark />
      </S.Text>
    </S.Item>
  );
};

export default Item;
