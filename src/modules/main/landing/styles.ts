import styled from "styled-components";

export const LandingWrapper = styled.div`
  min-height: 100vh;
  background-image: url("/assets/landing.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      50% 50% at 50% 50%,
      #b2bfff77 0%,
      #b2bfff 100%,
      #b2bfff 100%
    );
  }
`;

export const LandingContent = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  color: #fff;
  max-width: 780px;
  width: 90%;
  h1 {
    margin-bottom: 30px;
    font-size: 96px;
    text-shadow: 0px 15px 36px #00000040;
    font-weight: 400;
  }
  p {
    margin-bottom: 50px;
    text-shadow: 0px 15px 36px #00000040;
    font-size: 24px;
    max-width: 780px;
  }
  button {
    box-shadow: 0px 11px 40px 0px #00000040;
    background: #fff;
    color: #210a46;
    border: none;
    outline: none;
    padding: 14px 40px;
    font-size: 24px;
    border-radius: 12px;
  }
  .socials {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
    a {
      color: #210a46;
      border-radius: 999px;
      box-shadow: 0px 11px 40px 0px #00000040;
      font-size: 24px;
      width: 50px;
      height: 50px;
      display: flex;
      align-items: center;
      background: #fff;
      justify-content: center;
    }
    & > :not(:first-child) {
      margin-left: 12px;
    }
  }
  @media screen and (max-width: 768px) {
    h1 {
      font-size: 64px;
    }
    p {
      font-size: 18px;
    }
    button {
      font-size: 18px;
    }
  }
`;
