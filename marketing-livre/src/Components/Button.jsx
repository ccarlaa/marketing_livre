import styled from "styled-components";
import Text from "./Text";
import React from "react";

const Button = ({label="", size="md"}) => {

  const number = '5561999797939';
  const message = "Olá, gostaria de agendar uma consultoria!"

  return (
    <ButtonComponent size={size} onClick={() => window.open(`https://api.whatsapp.com/send?phone=${number}&text=${encodeURIComponent(message)}`)}>
      <Text type="button" color="white">{label}</Text>
    </ButtonComponent>
  );
};

const ButtonComponent = styled.button`
  height: ${props => props.size == "md" ? '58px': '40px'};
  width: 100%;
  background: linear-gradient(150deg,  rgba(159,105,229,1) 0%, rgba(200,165,47,1) 100%);
  border: 0px;
  cursor: pointer;
  text-decoration: none;
  border-radius: 8px;
  transition: all 0.2s ease-in-out;
  outline: none;
  flex-wrap: nowrap;

  &:hover {
    transform: scale(1.05); 
  }
  
  @media (max-width: 768px) {
    height: 53px;
  }
`;
export default Button;