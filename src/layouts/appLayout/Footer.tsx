import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";
import { SiOpensea } from "react-icons/si";
import * as S from "./layout.styles";

export const Footer: React.FC = () => {
  return (
    <S.FooterWrapper>
      <S.FooterContent>
        <S.FooterCopyright>
          <div>
            <img src="/assets/logo.png" alt="logo" />
            <h1 className="font-title">Pudgy Bunnies</h1>
          </div>
          <p className="font-content">@ 2021 Pudgy Bunnies</p>
          <p className="font-content">All rights reserved</p>
        </S.FooterCopyright>
        <S.FooterNavigation>
          <h2 className="font-title">Navigation</h2>
          <a href="#about" className="font-content">
            About
          </a>
          <a href="#collection" className="font-content">
            Collection
          </a>
          <a href="#roadmap" className="font-content">
            Roadmap
          </a>
          <a href="#team" className="font-content">
            Team
          </a>
        </S.FooterNavigation>
        <S.FooterNavigation>
          <h2 className="font-title">About</h2>
          <a href="#" className="font-content">
            How to Buy
          </a>
          <a href="#" className="font-content">
            Opensea
          </a>
        </S.FooterNavigation>
        <S.FooterNavigation>
          <h2 className="font-title">Connect</h2>
          <div>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaDiscord />
            </a>
            <a href="#">
              <SiOpensea />
            </a>
          </div>
        </S.FooterNavigation>
      </S.FooterContent>
    </S.FooterWrapper>
  );
};
