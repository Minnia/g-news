import React from "react";
import * as S from "./styled";

type GridContainerProps = {
  children: any;
};

const GridContainer: React.FC<GridContainerProps> = ({ children }) => {
  console.log(children);
  return (
    <S.GridContainer>
      {children?.map((child: any) => {
        console.log(child);
        return (
          <div
            style={{
              margin: "10px",

              backgroundColor: "white",
              boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.75)",
            }}
          >
            <div>
              <S.Title>{child.title}</S.Title>
            </div>
            <S.Image src={child.uri ?? child.image} />
            <S.Description>{child.description}</S.Description>
          </div>
        );
      })}
    </S.GridContainer>
  );
};

export default GridContainer;
