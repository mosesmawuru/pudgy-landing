import React from "react";
import { FaInstagram, FaTelegram, FaTwitter } from "react-icons/fa";
import { FaDiscord, FaXTwitter } from "react-icons/fa6";
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
          <p className="font-content">@ 2024 Pudgy Bunnies</p>
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
        {/* <S.FooterNavigation>
          <h2 className="font-title">About</h2>
          <a href="#" className="font-content">
            How to Buy
          </a>
          <a href="#" className="font-content">
            Opensea
          </a>
        </S.FooterNavigation> */}
        <S.FooterNavigation>
          <h2 className="font-title">Connect</h2>
          <div>
            <a
              href="https://discord.com/invite/pudgybunnies"
              target="_blank"
              rel="noreferrer"
            >
              <FaDiscord />
            </a>
            <a
              href="https://t.me/+dulrwLwhjVMzZTQx"
              target="_blank"
              rel="noreferrer"
            >
              <FaTelegram />
            </a>
            <a
              href="https://x.com/pudgybunnies_"
              target="_blank"
              rel="noreferrer"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://www.instagram.com/pudgybunnies"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
          </div>
        </S.FooterNavigation>
      </S.FooterContent>
    </S.FooterWrapper>
  );
};
