import styled from "styled-components";

export const AboutWrapper = styled.div`
  position: relative;
  padding-top: 70px;
  background-color: #feffc0;
  &::before {
    content: "";
    position: absolute;

    top: 0;
    left: 0;
    width: 100%;
    height: 70px;
    background-color: #b2bfff;
    z-index: 0;
  }
`;

export const AboutContent = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  max-width: 1280px;
  width: 90%;
  margin: auto;
  div {
    color: #210a46;
    flex: 1;
    display: flex;
    flex-direction: column;
    h1 {
      font-size: 36px;
      margin-bottom: 20px;
    }
    p {
      font-size: 18px;
      span {
        color: #fa6a9b;
      }
    }
    img {
      width: 100%;
      margin-top: -60px;
    }
  }
  div:not(.img-wrapper) {
    padding: 40px 0;
  }
  .img-wrapper {
    align-items: end;
  }
  @media screen and (max-width: 1024px) {
    div {
      img {
        margin-top: 0;
      }
    }
  }
  @media screen and (max-width: 768px) {
    div {
      h1 {
        font-size: 24px;
        margin-bottom: 12px;
      }
    }
    flex-direction: column;
  }
`;
