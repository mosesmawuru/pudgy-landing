import React from "react";
import * as S from "./styles";

export const AboutSection: React.FC = () => {
  return (
    <S.AboutWrapper id="about">
      <S.AboutContent>
        <div>
          <h1 className="font-title">What are pudgy bunnies?</h1>
          <p className="font-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad <span>8,888</span> veniam, quis nostrud
          </p>
        </div>
        <div className="img-wrapper">
          <img src="/assets/about.png" alt="" />
        </div>
      </S.AboutContent>
    </S.AboutWrapper>
  );
};
