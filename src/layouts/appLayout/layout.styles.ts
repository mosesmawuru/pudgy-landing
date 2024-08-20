import styled from "styled-components";

export const AppLayoutWrapper = styled.div`
  position: relative;
`;

export const AppContentWrapper = styled.div``;

export const HeaderWrapper = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  z-index: 2;
`;

export const HeaderContent = styled.div`
  padding: 28px 0;
  width: 90%;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 40px;
  }
  @media screen and (max-width: 768px) {
    padding: 14px 0;
    img {
      width: 25px;
    }
  }
`;

export const HeaderNav = styled.div`
  & > :not(:first-child) {
    margin-left: 40px;
  }
  a {
    color: #fff;
    text-decoration: none;
    font-size: 18px;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const ConnectWallet = styled.div`
  background: #ff8ebf;
  border-radius: 12px;
  font-size: 18px;
  color: #fff;
  cursor: pointer;
  padding: 14px 24px;
  display: flex;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const ToggleMobile = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    cursor: pointer;
    justify-content: center;
  }
`;

export const FooterWrapper = styled.div`
  background: #b2bfff;
  padding: 60px 0;
  @media screen and (max-width: 768px) {
    padding: 45px 0;
  }
`;

export const FooterContent = styled.div`
  max-width: 1280px;
  width: 90%;
  margin: auto;
  color: #fff;

  display: flex;
  justify-content: space-between;
  & > :not(:last-child) {
    margin-right: 20px;
  }
  @media screen and (max-width: 768px) {
    max-width: 500px;
    flex-direction: column;
    & > :not(:last-child) {
      margin-right: 0px;
    }
  }
`;

export const FooterCopyright = styled.div`
  div {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    img {
      width: 40px;
      margin-right: 20px;
    }
    h1 {
      font-size: 36px;
      line-height: 36px;
      font-weight: 300;
      text-transform: capitalize;
    }
  }
  p {
    margin-bottom: 12px;
    font-size: 18px;
    font-weight: 400;
  }
  @media screen and (max-width: 768px) {
    div {
      img {
        width: 25px;
      }
      h1 {
        font-size: 24px;
      }
    }
    p {
      font-size: 16px;
    }
    margin-bottom: 60px;
  }
`;

export const FooterNavigation = styled.div`
  padding-top: 12px;
  h2 {
    margin-bottom: 20px;
    font-size: 21px;
    font-weight: 400;
  }
  div {
    display: flex;
    a {
      width: 40px;
      height: 40px;
      border-radius: 9px;
      background: #fff;
      color: #b2bfff;
      align-items: center;
      justify-content: center;
      margin-right: 12px;
    }
  }
  a {
    font-size: 18px;
    color: #fff;
    text-decoration: none;
    display: flex;
    margin-bottom: 12px;
  }
  @media screen and (max-width: 768px) {
    &:not(:last-child) {
      margin-bottom: 50px;
    }
  }
`;

export const SidebarWrapper = styled.div`
  position: fixed;
  z-index: 10;
  display: flex;
  flex-direction: column;
  width: 320px;
  height: 100%;
  padding: 0 30px;
  padding-bottom: 50px;
  top: 0;
  right: -320px;
  transition: all 0.3s;
  background: #fff;
  opacity: 0;
  visibility: hidden;
  &.open {
    right: 0;
    opacity: 1;
    visibility: visible;
  }
  button {
    margin-top: auto;
    background: #ff8ebf;
    border: none;
    outline: none;
    border-radius: 12px;
    padding: 14px 24px;
    color: #fff;
  }
`;

export const SidebarOverlay = styled.div`
  position: fixed;
  z-index: 9;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: #00000020;
  backdrop-filter: blur(5px);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s;
  &.open {
    opacity: 1;
    visibility: visible;
  }
`;

export const CloseButton = styled.div`
  cursor: pointer;
  position: absolute;
  right: 20px;
  top: 20px;
`;

export const SidebarNav = styled.div`
  padding: 80px 0;
  display: flex;
  flex-direction: column;
  a {
    font-size: 18px;
    margin-bottom: 20px;
    text-decoration: none;
    color: #000;
  }
`;
