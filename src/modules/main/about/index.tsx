import React, { useEffect } from "react";
import AOS from "aos";
import * as S from "./styles";

export const AboutSection: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <S.AboutWrapper id="about">
      <S.AboutContent>
        <div data-aos="fade-right">
          <h1 className="font-title">What are pudgy bunnies?</h1>
          <p className="font-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad <span>8,888</span> veniam, quis nostrud
          </p>
        </div>
        <div className="img-wrapper" data-aos="fade-left">
          <img src="/assets/about.png" alt="" />
        </div>
      </S.AboutContent>
    </S.AboutWrapper>
  );
};
