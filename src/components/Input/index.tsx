import React, { ChangeEvent, useRef, useState } from "react";
import * as S from "./style";

import useAddTodo from "../../hooks/useAddTodo";

const Input = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState("");
  const addTodo = useAddTodo();

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleClickSubmit = () => {
    addTodo(value);
    setValue("");
  };
  return (
    <S.Container>
      <S.Input ref={inputRef} value={value} onChange={handleChangeInput} />
      <S.Button disabled={!value} onClick={handleClickSubmit}>
        등록
      </S.Button>
    </S.Container>
  );
};

export default Input;
