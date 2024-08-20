import React, { useState } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Sidebar } from "./Sidebar";
import * as S from "./layout.styles";

export const AppLayout: React.FC<React.HTMLAttributes<HTMLElement>> = ({
  children,
}) => {
  const [openSidebar, setOpenSidebar] = useState(false);
  return (
    <S.AppLayoutWrapper>
      <Header onToggleMobile={() => setOpenSidebar((prev) => !prev)} />
      <S.AppContentWrapper>{children}</S.AppContentWrapper>
      <Footer />
      <Sidebar open={openSidebar} onClose={() => setOpenSidebar(false)} />
    </S.AppLayoutWrapper>
  );
};
