import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation, Pagination } from "swiper/modules";
import StepCard from "../StepCard";
import colors from "../../Style/colors";
import CommentCard from "../CommentCard";


const MySwiper = ({cards, type = "services"}) => {
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
            slidesPerView: 3,
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
                {type === 'comments' ?
                  <CommentCard name={card.name} comment={card.comment} description={card.description} numberStars={card.stars} img={card.img}/>
                  :
                  <StepCard title={card.title} description={card.description} icon={card.icon}/>
                }
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
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
    position: absolute;

    &:hover {
      background-color: ${colors.primary[100]};
      color:  ${colors.primary[700]};
    }
  }

  .icon-circle.swiper-button-prev {
    left: -60px;
  }

  .icon-circle.swiper-button-next {
    right: -60px;
  }

  .swiper-button-prev:after{
    font-size: 20px !important;
    font-weight: 700;
    padding-right: 3px;
  }

  .swiper-button-next:after {
    font-size: 20px !important;
    font-weight: 700;
    padding-left: -93px;
  }
  
  .swiper-pagination-bullet {
    background-color: ${colors.primary[500]}; 
  }
  
`;

export default MySwiper;
