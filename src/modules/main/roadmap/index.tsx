import React, { useEffect } from "react";
import AOS from "aos";
import * as S from "./styles";

export const RoadmapSection: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <S.RoadmapWrapper id="roadmap">
      <S.RoadmapContent>
        <h1 className="font-title" data-aos="fade-up">
          Roadmap
        </h1>
        <p className="font-content" data-aos="fade-up">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod
        </p>
        <img src="/assets/roadmap.jpg" alt="" data-aos="zoom-in" />
      </S.RoadmapContent>
    </S.RoadmapWrapper>
  );
};
