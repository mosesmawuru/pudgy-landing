import React from "react";
import { HiOutlineBars2 } from "react-icons/hi2";
import * as S from "./layout.styles";

type Props = {
  onToggleMobile: () => void;
};

export const Header: React.FC<Props> = ({ onToggleMobile }) => {
  return (
    <S.HeaderWrapper>
      <S.HeaderContent>
        <img src="/assets/logo.png" alt="" />
        <S.HeaderNav className="font-content">
          <a href="#about">About</a>
          <a href="#collection">Collection</a>
          <a href="#roadmap">Roadmap</a>
          <a href="#Team">Team</a>
        </S.HeaderNav>
        <S.ConnectWallet className="font-content">
          Connect Wallet
        </S.ConnectWallet>
        <S.ToggleMobile onClick={onToggleMobile}>
          <HiOutlineBars2 size={20} color="#fff" />
        </S.ToggleMobile>
      </S.HeaderContent>
    </S.HeaderWrapper>
  );
};
