

import React from "react";
import styled from "styled-components";
import whatsapp from "../Images/whatsapp.png";

const ButtonWhats = () => {
    const number = '5561999797939';
    const message = "Olá, gostaria de agendar uma consultoria!"
    return (
        <ButtonWhatsComponent onClick={() => window.open(`https://api.whatsapp.com/send?phone=${number}&text=${encodeURIComponent(message)}`)}>
            <img src={whatsapp} />
        </ButtonWhatsComponent>
    );
};

const ButtonWhatsComponent = styled.div`
  position: fixed;
  bottom: 40px;
  right: 40px;
  cursor: pointer;

  img {
    width: 60px;
  }
`;

export default ButtonWhats;

