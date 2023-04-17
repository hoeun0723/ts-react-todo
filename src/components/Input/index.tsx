import React, { useRef, useState } from "react";
import * as S from "./style";

const Input = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [content, setContent] = useState("");

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setContent(value);
  };

  const handleClickSubmit = () => {};
  return (
    <S.Container>
      <S.Input ref={inputRef} onChange={handleChangeInput} />
      <S.Button disabled={!content} onClick={handleClickSubmit}>
        등록
      </S.Button>
    </S.Container>
  );
};

export default Input;
