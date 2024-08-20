import styled from "styled-components";

export const TeamsWrapper = styled.div`
  background-color: #ffd4bc;
  padding: 100px 0;
  @media screen and (max-width: 768px) {
    padding: 50px 0;
  }
`;

export const TeamsContent = styled.div`
  max-width: 1280px;
  width: 90%;
  margin: auto;
  color: #210a46;
  h1 {
    font-size: 36px;
  }
  p {
    font-size: 18px;
    margin-top: 4px;
  }
`;

export const TeamsSlider = styled.div`
  margin-top: 68px;
  @media screen and (max-width: 768px) {
    margin-top: 40px;
  }
`;

export const TeamsItemWrapper = styled.div`
  width: 100%;
  background: #fff;
  box-shadow: 0px 16px 31px 0px #210a461a;
  border-radius: 12px;
  padding: 28px;
  .img-wrapper {
    position: relative;
    width: 100%;
    padding-top: 100%;
    img {
      position: absolute;
      top: 0;
      width: 100%;
    }
  }
  p {
    margin-top: 20px;
    font-size: 18px;
    color: #fa6a9b;
  }
  h2 {
    color: #210a46;
    font-size: 21px;
    margin-bottom: 26px;
  }
  @media screen and (max-width: 768px) {
    padding: 14px;
    p {
      font-size: 14px;
    }
    h2 {
      font-size: 18px;
      margin-bottom: 20px;
    }
  }
`;
