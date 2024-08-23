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
          {
            "Below is the official Pudgy Bunnies Roadmap. We uniquely integrated community growth by unlocking milestones (Roadmap phases) as we grow. You won't want to miss what is coming."
          }
        </p>
        <img src="/assets/roadmap.jpg" alt="" data-aos="zoom-in" />
      </S.RoadmapContent>
    </S.RoadmapWrapper>
  );
};
