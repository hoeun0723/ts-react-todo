import React from "react";
import * as S from "./style";

interface ContainerProps {
  children: JSX.Element[];
}

const Container = ({ children }: ContainerProps) => {
  return <S.Container>{children}</S.Container>;
};

export default Container;
