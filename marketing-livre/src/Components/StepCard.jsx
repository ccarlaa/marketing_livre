import React from "react";
import styled from "styled-components";
import colors from "../Style/colors";
import { ArchiveBoxIcon } from "@heroicons/react/24/outline";
import Text from "./Text";

const StepCard = ({title, description, icon: Icon}) => {
  return (
    <StepCardComponent>
      <div className="hero-icon-circle">
        <Icon className="hero-icon" />
      </div>
      <div className="title">
        <Text size="sm" type="headline" color={colors.neutral[950]}>
          {title}
        </Text>
      </div>
      <div className="description">
        <Text size="sm" type="body" color={colors.neutral[950]}>
          {description}
        </Text>
      </div>
    </StepCardComponent>
  );
};

const StepCardComponent = styled.div`
  min-width: 350px;
  height: 280px;
  border-radius: 16px;
  background-color: white;
  padding: 24px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);


  .hero-icon-circle {
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 14px;
    background-color: ${colors.primary[400]};
  }

  .hero-icon {
    width: 30px;
    height: 30px;
    color: white;
  }

  .title {
    padding: 24px 0px;
    text-align: left;
  }

  .description {
    text-align: left;
  }
`;

export default StepCard;

