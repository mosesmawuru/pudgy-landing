import React from "react";
import { MdClose } from "react-icons/md";
import * as S from "./layout.styles";

type Props = {
  open: boolean;
  onClose: () => void;
};

export const Sidebar: React.FC<Props> = ({ open, onClose }) => {
  return (
    <>
      <S.SidebarWrapper className={`${open ? "open" : ""}`}>
        <S.CloseButton onClick={onClose}>
          <MdClose size={20} />
        </S.CloseButton>
        <S.SidebarNav className="font-content">
          <a href="#about">About</a>
          <a href="#collection">Collection</a>
          <a href="#roadmap">Roadmap</a>
          <a href="#Team">Team</a>
        </S.SidebarNav>
        <button className="font-content">Connect Wallet</button>
      </S.SidebarWrapper>
      <S.SidebarOverlay onClick={onClose} className={`${open ? "open" : ""}`} />
    </>
  );
};
