import styled from "styled-components";

export const CollectionWrapper = styled.div`
  max-width: 1280px;
  width: 90%;
  margin: 0 auto;
  padding: 100px 0;
  @media screen and (max-width: 768px) {
    padding: 56px 0;
  }
`;

export const CollectionHeader = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  margin-bottom: 68px;
  div {
    color: #210a46;
    h1 {
      font-size: 36px;
      font-weight: 400;
    }
    p {
      font-size: 18px;
      margin-top: 4px;
    }
  }
  button {
    background: #ff8ebf;
    outline: none;
    border: none;
    border-radius: 12px;
    white-space: nowrap;
    color: #fff;
    font-size: 18px;
    padding: 14px 24px;
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 50px;
    flex-direction: column;
    div {
      margin-bottom: 28px;
      h1 {
        font-size: 24px;
      }
    }
  }
`;

export const CollectionContent = styled.div`
  display: flex;
  flex-direction: column;
  & > div {
    margin-bottom: 20px;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-gap: 20px;
    img {
      width: 100%;
    }
    .nft3 {
      grid-area: 1 / 2 / span 2 / span 2;
    }
    .nft4 {
      grid-area: 1 / 4 / span 2 / span 2;
    }
    .nft5 {
      grid-area: 1 / 6 / span 2 / span 2;
    }
    .nft8 {
      grid-area: 1 / 1 / span 2 / span 2;
    }
    .nft9 {
      grid-area: 1 / 3 / span 2 / span 2;
    }
    .nft14 {
      grid-area: 1 / 7 / span 2 / span 2;
    }
  }
  @media screen and (max-width: 768px) {
    flex-direction: row-reverse;
    & > div {
      margin-bottom: 0;
      flex: 1;
      grid-gap: 12px;
      grid-template-columns: 1fr 1fr;
      .nft3 {
        grid-area: 2 / 1 / span 2 / span 2;
      }
      .nft4 {
        grid-area: 4 / 1 / span 2 / span 2;
      }
      .nft5 {
        grid-area: 6 / 1 / span 2 / span 2;
      }
      .nft8 {
        grid-area: 1 / 1 / span 2 / span 2;
      }
      .nft9 {
        grid-area: 3 / 1 / span 2 / span 2;
      }
      .nft14 {
        grid-area: 7/ 1 / span 2 / span 2;
      }

      &:last-child {
        margin-right: 12px;
      }
    }
  }
`;
