import styled from "styled-components";
import colors from "../Style/colors";
import React from "react";

const Text = ({size = "md", type = "body", color = colors.neutral[700], children=""}) => {
  const textSize = () => {
    if(type == "headline") {
      if(size == "xl") {
        return {desktop: "64px", mobile: "32px"};
      }
      if(size == "lg") {
        return {desktop: "40px", mobile: "24px"};
      }
      if(size == "md") {
        return {desktop: "32px", mobile: "16px"};
      }
      if(size == "sm") {
        return {desktop: "24px", mobile: "14px"};
      }
    }

    if(type == "body") {
      if(size == "md") {
        return {desktop: "20px", mobile: "16px"};
      }
      if(size == "sm") {
        return {desktop: "16px", mobile: "12px"};
      }
    }

    if(type == "button") {
      return {desktop: "20px", mobile: "16px"};
    }
  };

  const textWeight = () => {
    if(type == "headline" || type  == "button") {
      return "700";
    }
    if(type == "body") {
      return "500";
    }
  };

  return (
    <TextComponent size={textSize()} weight={textWeight()} color={color}>
      {type == "button" ? children.toUpperCase() : children}
    </TextComponent>
  );
};

const TextComponent = styled.div`
  font-weight: ${props => props.weight};
  color: ${props => props.color};
  font-size: ${props => props.size.desktop};
    
  @media (max-width: 768px) {
    font-size: ${props => props.size.mobile};
  }
`;
export default Text;