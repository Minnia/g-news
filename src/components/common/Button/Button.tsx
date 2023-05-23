import React from "react";
import * as S from "./styled";

type OwnProps = {
  onClick?: () => void;
  style: {
    borderRadius: string;
    marginTop?: string;
    marginBottom?: string;
    height: string;
    backgroundColor: string;
    color?: string;
  };
  title: string;
};

const Button: React.FC<OwnProps> = ({
  onClick,
  title,
  style: {
    borderRadius,
    marginTop,
    height,
    color = "black",
    backgroundColor,
    marginBottom,
  },
}) => {
  return (
    <S.Button
      style={{
        borderRadius,
        marginTop,
        marginBottom,
        height,
        backgroundColor,
        color,
      }}
      onClick={onClick}
    >
      {title}
    </S.Button>
  );
};

export default Button;
