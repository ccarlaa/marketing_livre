import styled from "styled-components";
import Text from "../../Components/Text";
import colors from "../../Style/colors";
import Button from "../../Components/Button";
import React from "react";
import BackgroundImage from "../../Images/backgroundFirstSection.png";

const FirstSection = () => {
  return (
    <>
    <FirstSectionComponent id="section-start">
      <div className="title">
        <div className="first-title">
            <div className="aux-div-1">
              <Text type="headline" size="xl" color="white">
              Conectando&nbsp;
              </Text>
              <Text type="headline" size="xl" color={colors.primary[300]}>Marcas&nbsp;</Text>
            </div>
            <div className="aux-div-2">
              <Text type="headline" size="xl" color="white">
              ao&nbsp;
              </Text>
              <Text type="headline" size="xl" color={colors.primary[300]}>Sucesso</Text>
            </div>
        </div>
        <div>
          {/* <Text type="headline" size="xl" color="white">
              Descubra Nossa Abordagem&nbsp;
          </Text> */}
        </div>
          {/* <div>
            <Text type="headline" size="xl" color={colors.primary[300]}>Estratégica de Marketing</Text>
          </div> */}
        </div>
        <div className="subtitle">
        <Text type="body" size="md">
            Não subestime o impacto do marketing. Descubra como o Marketing Livre Fácil pode definir o sucesso do seu negócio. Converse conosco e dê o primeiro passo!      </Text>
        </div>
        <div className="cta-button">
            <Button label="fale conosco" />
        </div>
    </FirstSectionComponent>
    <Gradient/>
    </>

  );
};

const FirstSectionComponent = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 200px 0px;
  background-color: black;
  flex-direction: column;
  background-image: url(${BackgroundImage});
  background-size: cover;
  background-position: center;

  @media (max-width: 1024px) {
    padding: 100px 20px;

    .first-title {
      display: flex;
      flex-direction: column;
    }
  }

  @media (max-width: 768px) {
      padding: 100px 20px;
    }

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

  .first-title {

    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
    }
  }

  .subtitle {
    width: 45%;
    text-align: center;
    padding: 30px 0px 30px 0px;

    @media (max-width: 768px) {
      width: 100%;
    }
  }

  .cta-button {
    width: 351px;
    padding: 0px 20px;

    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
    }
  }
`;

const Gradient = styled.div`
  width: 100%;
  height: 50px;
  background: linear-gradient(#020D1B 50%, white 100%);
  
`;
export default FirstSection;
