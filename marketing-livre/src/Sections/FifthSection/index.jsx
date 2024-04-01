import React from "react";
import styled from "styled-components";
import Text from "../../Components/Text";
import colors from "../../Style/colors";
import MySwiper from "../../Components/Swiper/SwiperComponent";
import circlesLeft from "../../Images/fifth_section_circles_left.png";
import circleRight from "../../Images/fifth_section_circle_right.png";
import client1 from "../../Images/client1.png";
import client2 from "../../Images/client2.png";
import client3 from "../../Images/client3.png";
import client4 from "../../Images/client4.png";
import client5 from "../../Images/client5.png";
import client6 from "../../Images/client6.png";
import client7 from "../../Images/client7.png";
import client8 from "../../Images/client8.png";


const cards = [
  {
    name: "David",
    comment: "Sinto que estamos falando a língua dos nossos clientes.",
    description: "Desde que começamos a aplicar as estratégias de marketing para o escritório, percebemos uma mudança notável. Sua expertise em advocacia fez toda a diferença.",
    stars: 5,
    img: client1

  },
  {
    name: "Flávia",
    comment: "Estou realmente impressionada.",
    description: "Antes, eu me senti sobrecarregada, tentando conciliar tudo. Agora, com as ferramentas e planos que você me mostrou, sinto que tenho mais controle sobre minha agenda e meu conteúdo.",
    stars: 5,
    img: client2
  },
  {
    name: "Flávia",
    comment: "Fez uma diferença absurda.",
    description: "Achei que seria só mais uma conversa, mas você trouxe uma perspectiva totalmente nova para mim. A forma como vejo meu negócio mudou depois daquele dia. ",
    stars: 5,
    img: client3
  },
  {
    name: "Ada",
    comment: "Estou encantada!",
    description: "A combinação e o design são perfeitos. E as artes que você propôs para as redes sociais estão perfeitas com o visual da marca. Tudo ficou tão harmônico!",
    stars: 5,
    img: client4
  },
  {
    name: "Antônio",
    comment: "As vendas deram um salto de 20%!",
    description: "A gente se esforçou, mas sem a sua ajuda, acho que ainda estaríamos patinando. Você trouxe um olhar novo pra tudo aqui. Até os funcionários estão mais animados com o aumento dos clientes.",
    stars: 5,
    img: client5
  },
  {
    name: "Amanda",
    comment: "Meus seguidores estão amando!",
    description: "A linha editorial que você criou está sendo um sucesso! Facilitou tanto o meu dia a dia e as interações estão lá em cima.",
    stars: 5,
    img: client6
  },
  {
    name: "Carlos",
    comment: "Sinto que estamos no caminho certo.",
    description: "Desde que começamos a trabalhar juntos na identificação e otimização do meu restaurante, as coisas mudaram completamente. Nunca imaginei que detalhes aparentemente pequenos pudessem ter um impacto tão grande.",
    stars: 5,
    img: client7
  },
  {
    name: "José",
    comment: "Fez toda a diferença!",
    description: "O plano de marketing deu super certo. Estamos vendo um aumento significativo nas vendas e no engajamento online.",
    stars: 5,
    img: client8
  },
]

const FifthSection = () => {
    return (
        <FifthSectionComponent>
            <div className="header">
                <Text type="headline" size="lg" color={colors.neutral[950]}>
                    O que dizem sobre nós?
                </Text>
                <br />
                <Text type="body" size="md" color={colors.neutral[600]}>
                    Estratégias eficazes começam com uma compreensão profunda do seu negócio. Dedicamo-nos a conhecer cada detalhe, garantindo soluções sob medida.
                </Text>
            </div>
            <div className="swiper-second-section"> 
                <MySwiper cards={cards} type="comments"/>
            </div>
            <div className="circles-left">
                <img src={circlesLeft} />
            </div>
            <div className="circle-right">
                <img src={circleRight} />
            </div>
        </FifthSectionComponent>
    );
};

const FifthSectionComponent = styled.section`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 620px;
  padding: 0px 150px;
  background-color: ${colors.neutral[50]};
  position: relative;

    .header {
        padding: 20px 0px;
        width: 60%;
    }

    .swiper-second-section {
        width: 100%;
        display: flex;
        padding: 48px;
        justify-content: flex-end;
    }

    .circles-left {
        position: absolute;
        left: 0px;
        top: 180px;
    }

    .circle-right {
        position: absolute;
        right: 220px;
        top: 120px;
    }

`;

export default FifthSection;