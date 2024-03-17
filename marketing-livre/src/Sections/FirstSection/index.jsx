import styled from "styled-components";
import Text from "../../Components/Text";
import colors from "../../Style/colors";
import Button from "../../Components/Button";
import React from "react";
import BackgroundImage from "../../Images/backgroundFirstSection.png";

const FirstSection = () => {
  return (
    <>
    <FirstSectionComponent>
      <div className="title">
        <div>
          <Text type="headline" size="xl" color="white">
            Transforme seu&nbsp;
          </Text>
          <Text type="headline" size="xl" color={colors.primary[300]}>negócio</Text>
        </div>
        <div className="second-line">
          <Text type="headline" size="xl" color="white">
            com a&nbsp;
          </Text>
          <Text type="headline" size="xl" color={colors.primary[300]}>Marketing Livre Fácil</Text>
        </div>
      </div>
      <div className="subtitle">
      <Text type="body" size="md">
        A Marketing Livre Fácil está aqui para ser a força que impulsiona sua presença online, redefine sua narrativa e cria conexões poderosas com seu público-alvo.
      </Text>
      </div>
      <div className="cta-button">
      <Button label="fale conosco" />
      </div>
    </FirstSectionComponent>
    <Gradient/>
    </>

  );
};

const FirstSectionComponent = styled.header`
  width: 100%;
  height: 838px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  flex-direction: column;
  background-image: url(${BackgroundImage});
  background-size: cover;
  background-position: center;

  .title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;

    div {
      display: flex;
      justify-content: center;
    }

    .second-line {
      padding-top: 16px;
    }
  }

  .subtitle {
    width: 45%;
    text-align: center;
    padding: 56px 0px 30px 0px;
  }

  .cta-button {
    width: 351px;
  }
`;

const Gradient = styled.div`
  width: 100%;
  height: 50px;
  background: linear-gradient(#010B17 50%, white 100%);
  
`;
export default FirstSection;
