import React from "react";
import styled from "styled-components";
import Text from "../../Components/Text";
import colors from "../../Style/colors";
import rocketImage from "../../Images/third_section_rocket.png";
import circlesLeft from "../../Images/third_section_circles_left.png";
import circlesRight from "../../Images/third_section_circles_right.png";
import Button from "../../Components/Button";

const ThirdSection = () => {
  return (
    <ThirdSectionComponent id="section-about">
        <div className="infos">
            <div className="texts">
                <Text type="headline" size="lg" color={colors.neutral[950]}>
                    Minha História
                </Text>
                <div className="description">
                    <Text type="body" size="md" color={colors.neutral[600]}>
                    Lembro-me dos dias ajudando meus pais em sua pequena loja, aprendendo desde cedo o valor imensurável da visibilidade. Como você, entendi que não importa quão bom seja seu produto ou serviço, se não for visto, não existe. E essa realidade não mudou, mesmo que os tempos tenham.
                    Já mais velho, percebi que essa não era uma luta só minha; era uma realidade enfrentada por inúmeros empreendedores. Muitos de nós não falhamos por falta de qualidade, mas por falta de visibilidade. Foi essa percepção que me moveu a criar a Marketing Livre Fácil - uma resposta direta a essa necessidade universal.
                    <br />
                    <br />

                    A Marketing Livre Fácil não é apenas uma empresa; é uma solução criada para você, empreendedor, que busca não apenas sobreviver, mas prosperar. Nós tornamos o marketing acessível, descomplicado e eficaz, para que você possa alcançar o sucesso que merece.
                    <br />
                    <br />

                    Convidamos você a embarcar nesta jornada conosco. Vamos transformar o desafio da visibilidade em uma oportunidade de crescimento. Com a Marketing Livre Fácil, você não está apenas investindo 
                    em marketing; você está investindo em seu futuro, garantindo que seu negócio brilhe como deveria.
                    </Text>
                </div>
            </div>
            <div className="image">
                <img src={rocketImage} />
            </div>
        </div>
        <div className="button-cta">
            <Button label="Fale Conosco" />
        </div>
        <div className="circles-left">
            <img src={circlesLeft} />
        </div>
        <div className="circles-right">
            <img src={circlesRight} />
        </div>
    </ThirdSectionComponent>
  );
};

const ThirdSectionComponent = styled.section`
    text-align: center;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: auto;
    background-color: ${colors.neutral[50]};
    padding: 40px 200px;
    position: relative;
    flex-direction: column;

    .infos {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .texts {
        width: 50%;
        text-align: left;

        .description {
            padding-top: 40px;
        }
    }

    .image {
        width: 50%;

        img {
            width: 600px;
        }
    }

    .circles-left {
        position: absolute;
        left: 0px;
        top: 40px;
    }

    .circles-right {
        position: absolute;
        right: 0px;
        top: 140px;
    }

    .button-cta {
        padding: 60px 0px;
        width: 351px;
    }
`
export default ThirdSection;