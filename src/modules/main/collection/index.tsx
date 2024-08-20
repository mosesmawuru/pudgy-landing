import React from "react";
import * as S from "./styles";

export const CollectionSection: React.FC = () => {
  return (
    <S.CollectionWrapper id="collection">
      <S.CollectionHeader>
        <div>
          <h1 className="font-title">The collection</h1>
          <p className="font-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod
          </p>
        </div>
        <button className="font-content">View on Opensea</button>
      </S.CollectionHeader>
      <S.CollectionContent>
        <div>
          <img src="/assets/nfts/1.png" alt="" />
          <img src="/assets/nfts/6.png" alt="" />
          <img src="/assets/nfts/3.png" alt="" className="nft3" />
          <img src="/assets/nfts/4.png" alt="" className="nft4" />
          <img src="/assets/nfts/5.png" alt="" className="nft5" />
          <img src="/assets/nfts/2.png" alt="" />
          <img src="/assets/nfts/7.png" alt="" />
        </div>
        <div>
          <img src="/assets/nfts/8.png" alt="" className="nft8" />
          <img src="/assets/nfts/9.png" alt="" className="nft9" />
          <img src="/assets/nfts/10.png" alt="" />
          <img src="/assets/nfts/11.png" alt="" />
          <img src="/assets/nfts/12.png" alt="" />
          <img src="/assets/nfts/13.png" alt="" />
          <img src="/assets/nfts/14.png" alt="" className="nft14" />
        </div>
      </S.CollectionContent>
    </S.CollectionWrapper>
  );
};
