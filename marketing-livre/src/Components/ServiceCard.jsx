import React from "react";
import styled from "styled-components";
import colors from "../Style/colors";
import Text from "./Text";

const ServiceCard = ({title, description, icon: Icon}) => {
  return (
    <ServiceCardComponent>
      <div className="hero-icon-circle">
        <Icon className="hero-icon" />
      </div>
      <div className="title">
        <Text size="sm" type="headline" color={'white'}>
          {title}
        </Text>
      </div>
      <div className="description">
        <Text size="sm" type="body" color={'white'}>
          {description}
        </Text>
      </div>
    </ServiceCardComponent>
  );
};

const ServiceCardComponent = styled.div`
  width: 100%;
  border: 1px solid ${colors.neutral[50]};
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0px 0px 15px #ffffff;

  @media (max-width: 768px) {
    max-width: 300px;
    height: 280px;
    text-align: left;
    background-color: none;
  }


  .hero-icon-circle {
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 14px;
    border: 1px solid white;
    background-color: rgba(255, 255, 255, 0.1); 

  }

  .hero-icon {
    width: 30px;
    height: 30px;
    color: ${colors.primary[300]};
  }

  .title {
    padding: 24px 0px;
    text-align: left;
  }

  .description {
    text-align: left;
  }
`;

export default ServiceCard;

