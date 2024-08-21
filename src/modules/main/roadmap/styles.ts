import styled from "styled-components";

export const RoadmapWrapper = styled.div`
  background: #ff9dc7;
`;

export const RoadmapContent = styled.div`
  max-width: 1280px;
  width: 90%;
  margin: auto;
  padding: 100px 0;
  color: #fff;
  h1 {
    font-size: 36px;
    font-weight: 400;
  }
  p {
    font-size: 18px;
    margin-top: 4px;
    margin-bottom: 60px;
  }
  img {
    width: 100%;
    height: auto;
    border-radius: 20px;
  }
  @media screen and (max-width: 768px) {
    padding: 50px 0;
    h1 {
      font-size: 24px;
    }
    p {
      font-size: 14px;
      margin-bottom: 30px;
    }
  }
`;
