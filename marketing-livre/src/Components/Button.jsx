import styled from "styled-components";
import Text from "./Text";
import React from "react";

const Button = ({ onClick= () => {}, label=""}) => {

  return (
    <ButtonComponent onClick={onClick}>
      <Text type="button" color="white">{label}</Text>
    </ButtonComponent>
  );
};

const ButtonComponent = styled.button`
  height: 58px;
  width: 100%;
  background: linear-gradient(150deg,  rgba(159,105,229,1) 0%, rgba(200,165,47,1) 100%);
  border: 0px;
  cursor: pointer;
  text-decoration: none;
  border-radius: 8px;
  
  @media (max-width: 768px) {
    height: 53px;
  }
`;
export default Button;