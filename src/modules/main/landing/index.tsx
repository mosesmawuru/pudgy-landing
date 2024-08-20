import React from "react";
import * as S from "./styles";

export const LandingSection: React.FC = () => {
  return (
    <S.LandingWrapper>
      <S.LandingContent>
        <h1 className="font-title">Pudgy Bunnies</h1>
        <p className="font-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 8,888
          tempor incididunt
        </p>
        <button className="font-content">Sold Out</button>
      </S.LandingContent>
    </S.LandingWrapper>
  );
};
