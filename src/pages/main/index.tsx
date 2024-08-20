import React from "react";
import { AppLayout } from "../../layouts";
import * as M from "../../modules";

export const MainPage: React.FC = () => {
  return (
    <AppLayout>
      <M.LandingSection />
      <M.AboutSection />
      <M.RoadmapSection />
      <M.CollectionSection />
      <M.TeamSection />
    </AppLayout>
  );
};
