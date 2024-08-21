import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaTwitter } from "react-icons/fa";
import * as S from "./styles";

const teams = [
  {
    image: "/assets/nfts/3.png",
    role: "Artist",
    name: "Johndoe",
    twitter: "#",
  },
  {
    image: "/assets/nfts/4.png",
    role: "Artist",
    name: "Johndoe",
    twitter: "#",
  },
  {
    image: "/assets/nfts/5.png",
    role: "Artist",
    name: "Johndoe",
    twitter: "#",
  },
  {
    image: "/assets/nfts/8.png",
    role: "Artist",
    name: "Johndoe",
    twitter: "#",
  },
  {
    image: "/assets/nfts/9.png",
    role: "Artist",
    name: "Johndoe",
    twitter: "#",
  },
];

export const TeamSection: React.FC = () => {
  return (
    <S.TeamsWrapper>
      <S.TeamsContent>
        <h1 className="font-title">Meet the team</h1>
        <p className="font-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod
        </p>
        <S.TeamsSlider>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
            centeredSlides={true}
            loop={true}
            breakpoints={{
              "@0.00": {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              "@0.75": {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              "@1.00": {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
          >
            {teams.map((item, key) => (
              <SwiperSlide key={key}>
                <S.TeamsItemWrapper>
                  <div className="img-wrapper">
                    <img src={item.image} alt="" />
                  </div>
                  <p className="font-content">{item.role}</p>
                  <h2 className="font-content">{item.name}</h2>
                  <a href={item.twitter} target="_blank" rel="noreferrer">
                    <FaTwitter color="#1DA1F2" size={22} />
                  </a>
                </S.TeamsItemWrapper>
              </SwiperSlide>
            ))}
          </Swiper>
        </S.TeamsSlider>
      </S.TeamsContent>
    </S.TeamsWrapper>
  );
};
