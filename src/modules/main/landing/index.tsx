import React, { useEffect } from "react";
import AOS from "aos";
import * as S from "./styles";

export const LandingSection: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <S.LandingWrapper>
      <S.LandingContent data-aos="fade-up">
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
