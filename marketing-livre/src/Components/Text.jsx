import styled from "styled-components";
import React from "react";

const Text = ({size = "md", type = "body", color = "white", children=""}) => {
  const textSize = () => {
    if(type == "headline") {
      if(size == "xl") {
        return {desktop: "64px", mobile: "32px", lineHeight: '64px'};
      }
      if(size == "lg") {
        return {desktop: "40px", mobile: "24px", lineHeight: '30px'};
      }
      if(size == "md") {
        return {desktop: "32px", mobile: "16px", lineHeight: '26px'};
      }
      if(size == "sm") {
        return {desktop: "24px", mobile: "14px", lineHeight: '24px'};
      }
    }

    if(type == "body") {
      if(size == "md") {
        return {desktop: "20px", mobile: "16px", lineHeight: '26px'};
      }
      if(size == "sm") {
        return {desktop: "16px", mobile: "12px", lineHeight: '20px'};
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
      return "400";
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
  line-height: ${props => props.size.lineHeight};
  
  @media (max-width: 768px) {
    font-size: ${props => props.size.mobile};
  }
`;
export default Text;