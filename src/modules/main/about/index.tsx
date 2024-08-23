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
            Pudgy Bunnies is a Solana NFT project with <span>6,000</span> (TBD)
            in supply. The project is based on a community-centric environment
            with many great things in store. We are only just getting started.
            See the roadmap below for our project's evolution as we grow!
          </p>
        </div>
        <div className="img-wrapper" data-aos="fade-left">
          <img src="/assets/about.png" alt="" />
        </div>
      </S.AboutContent>
    </S.AboutWrapper>
  );
};
