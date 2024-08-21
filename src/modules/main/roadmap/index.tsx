import React from "react";
import * as S from "./styles";

export const RoadmapSection: React.FC = () => {
  return (
    <S.RoadmapWrapper id="roadmap">
      <S.RoadmapContent>
        <h1 className="font-title">Roadmap</h1>
        <p className="font-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod
        </p>
        <img src="/assets/roadmap.jpg" alt="" />
      </S.RoadmapContent>
    </S.RoadmapWrapper>
  );
};
