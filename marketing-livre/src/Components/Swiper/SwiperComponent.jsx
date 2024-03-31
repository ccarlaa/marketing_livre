import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation, Pagination } from "swiper/modules";
import SwiperCard from "./SwiperCard";
import colors from "../../Style/colors";


const MySwiper = ({cards}) => {

  return (
    <SwiperComponent>
      <Swiper
  modules={[Pagination, Navigation]}
  loop={true}
  spaceBetween={20}
  slidesPerView={4}
  pagination={{
    clickable: true,
  }}
  breakpoints={{
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 4,
    },
  }}
  navigation={{
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }}  
  className="swiper"
      >
        {
          cards.map((card, index) => {
            return (
              <SwiperSlide key={index} className="swiper-slide">
                <SwiperCard title={card.title} description={card.description} icon={card.icon}/>
              </SwiperSlide>
            )
          })
        }
      </Swiper>

      <div className="icon-circle swiper-button-prev">
      </div>
      <div className="icon-circle swiper-button-next">
      </div>

    </SwiperComponent>
  );
};

const SwiperComponent = styled.div`
  width: 100%;
  height: 320px;
  position: relative;

  .swiper {
    height: 100%;
  }

  .swiper-slide {
    height: 100%;
  }

  .icon {
    width: 30px;

  }

  .icon-circle {
    width: 40px;
    height: 40px;
    border-radius: 100%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
    cursor: pointer;
    color: ${colors.neutral[700]};
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3);

    &:hover {
      background-color: ${colors.neutral[100]};
    }
  }

  .swiper-button-prev:after{
    font-size: 20px !important;
    font-weight: 700;
    padding-right: 3px;
  }

  .swiper-button-next:after {
    font-size: 20px !important;
    font-weight: 700;
    padding-left: 3px;
  }
  
  .swiper-pagination-bullet {
    background-color: ${colors.primary[500]}; 
  }
  
`;

export default MySwiper;
