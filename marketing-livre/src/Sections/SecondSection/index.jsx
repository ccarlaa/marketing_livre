import React from "react";
import styled from "styled-components";
import Text from "../../Components/Text";
import colors from "../../Style/colors";
import MySwiper from "../../Components/SwiperComponent";
import { CubeTransparentIcon, ArrowTrendingUpIcon, ChartBarIcon, MapPinIcon, FireIcon, Square3Stack3DIcon } from "@heroicons/react/24/outline";
import Button from "../../Components/Button";

const cards = [
  {
    title: "Diagnóstico Inicial",
    description: "Uma avaliação criteriosa para desvendar o potencial oculto do seu negócio e áreas-chave para aceleração.",
    icon: CubeTransparentIcon
  },
  {
    title: "Blueprint de Crescimento",
    description: "Desenvolvimento de uma estratégia sob medida, visando maximizar resultados e eficiência.",
    icon: ArrowTrendingUpIcon
  },
  {
    title: "Jornada Comprovada",
    description: "Imersão em casos de sucesso que espelham suas possibilidades de ascensão e transformação.",
    icon: ChartBarIcon
  },
  {
    title: "Orientação Personalizada",
    description: "Conselhos precisos, direcionados ao DNA do seu empreendimento, para alavancar sua trajetória ao sucesso.",
    icon: MapPinIcon
  },
  {
    title: "Metamorfose de sucesso",
    description: "Uma exploração detalhada dos serviços que podem escalar seu negócio para o próximo nível.",
    icon: FireIcon
  },
  {
    title: "Resumo e Próximos Passos",
    description: "Um resumo conclusivo com etapas claras e definidas, orientando você rumo a uma jornada de crescimento e sucesso contínuos.",
    icon: Square3Stack3DIcon
  },
]

const SecondSection = () => {
    return (
      <SecondSectionComponent id="section-consultancy">
        <Text type="headline" size="lg" color={colors.neutral[950]}>
          Consultoria gratuita
        </Text>
        <div className="swiper-second-section"> 
          <MySwiper cards={cards}/>
        </div>
        <div className="button-cta">
          <Button label="agendar consultoria gratuita" />
        </div>
      </SecondSectionComponent>
    );
};

const SecondSectionComponent = styled.section`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 620px;
  padding: 0px 150px;
  background-color: ${colors.neutral[50]};

  @media (max-width: 768px) {
    padding: 0px 20px;
  }

  .swiper-second-section {
    width: 100%;
    display: flex;
    padding: 48px;
    justify-content: flex-end;

    @media (max-width: 768px) {
      padding: 40px 0px;
    }
  }

  .button-cta {
    width: 400px;

    @media (max-width: 768px) {
      width: 100%;
    }
  }
`;

export default SecondSection;