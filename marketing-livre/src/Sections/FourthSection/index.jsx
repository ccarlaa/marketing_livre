import styled from "styled-components";
import Button from "../../Components/Button";
import React from "react";
import BackgroundImage from "../../Images/backgroundFirstSection.png";
import ServiceCard from "../../Components/ServiceCard";
import { 
    ArrowsPointingOutIcon, 
    MagnifyingGlassIcon, 
    CheckIcon,HomeModernIcon, 
    EnvelopeIcon, 
    CubeTransparentIcon, 
    LightBulbIcon, 
    IdentificationIcon,
    HeartIcon,
    BuildingOfficeIcon,
    UsersIcon,
    ChatBubbleLeftRightIcon
} from "@heroicons/react/24/outline";
import colors from "../../Style/colors";
import Text from "../../Components/Text";

const cards = [
    {
        title: "Amplificador de Marca Online",
        description: "Transformamos sua presença digital, destacando sua marca como líder no setor e construindo conexões significativas com seu público.",
        icon: ArrowsPointingOutIcon
    },
    {
        title: "Dominância nos Motores de Busca",
        description: "Eleve sua marca ao topo dos resultados de pesquisa com nossas estratégias de SEO avançadas, garantindo visibilidade máxima.",
        icon: MagnifyingGlassIcon
    },
    {
        title: "Publicidade Precisa",
        description: "Produzimos conteúdos que capturam a atenção e convertem, desde artigos envolventes a vídeos dinâmicos e infográficos educativos.",
        icon: CheckIcon
    },
    {
        title: "Fábrica de Conteúdo Transformador",
        description: "Conselhos precisos, direcionados ao DNA do seu empreendimento, para alavancar sua trajetória ao sucesso.",
        icon: HomeModernIcon
    },
    {
        title: "Engajamento via Email",
        description: "Criamos campanhas de email marketing que constroem lealdade e incentivam conversões repetidas, fortalecendo os relacionamentos com sua base de clientes.",
        icon: EnvelopeIcon
    },
    {
        title: "Inteligência em Análise de Dados",
        description: "Fornecemos insights profundos através de relatórios detalhados, permitindo que você compreenda e aprimore o desempenho de suas estratégias de marketing.",
        icon: CubeTransparentIcon
    },
    {
        title: "Academia de Marketing",
        description: "Equipamos você e sua equipe com o conhecimento necessário para liderar campanhas de sucesso através de treinamentos e workshops customizados.",
        icon: LightBulbIcon
    },
    {
        title: "Mestre do Branding",
        description: "Elevamos sua identidade visual e posicionamos sua marca de maneira memorável no coração dos seus clientes.",
        icon: IdentificationIcon
    },
    {
        title: "Arquitetos da Fidelidade",
        description: "Desenvolvemos estratégias que cativam, retêm e transformam clientes em fervorosos embaixadores da sua marca.",
        icon: HeartIcon
    },
    {
        title: "Dinâmica do Marketing Interno",
        description: "Fortalecemos a cultura da sua empresa e o engajamento da equipe com estratégias internas que aumentam a satisfação e a produtividade.",
        icon: BuildingOfficeIcon
    },
    {
        title: "Conexões de Influência",
        description: "Ampliamos seu alcance e credibilidade ao conectar sua marca com influenciadores chave, abrindo novos horizontes no mercado.",
        icon: UsersIcon
    },
    {
        title: "Orquestração Multicanal",
        description: "Integramos suas mensagens através de todas as plataformas para uma presença unificada e impactante, garantindo uma experiência do cliente sem falhas.",
        icon: ChatBubbleLeftRightIcon
    },
]

const FourthSection = () => {
  return (
    <>
    <GradientTop/>
        <FourthSectionComponent id="section-services">
            <Text type="headline" size="lg" color={'white'}>
                Nossos Serviços
            </Text>
            <div className="service-cards">
            {
            cards.map((card, index) => {
                return (
                    <ServiceCard key={index} title={card.title} description={card.description} icon={card.icon}/>
                )
            })
            }  
            </div>         
            <div className="cta-button" id="section-portfolio">
                <Button label="fale conosco" />
            </div>
            <Text type="headline" size="lg" color={'white'}>
                Alguns de nossos trabalhos
            </Text>
            Fotos aqui
            <div className="cta-button">
                <Button label="fale conosco" />
            </div>
        </FourthSectionComponent>
    <GradientBottom />
    </>

  );
};

const FourthSectionComponent = styled.section`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;
    flex-direction: column;
    background-image: url(${BackgroundImage});
    background-size: cover;
    background-position: center;
    padding: 0px 200px;


  .service-cards {
        width: 100%;
        display: grid;
        grid-template-rows: auto auto; 
        grid-template-columns: 1fr 1fr 1fr 1fr; 
        gap: 10px;
        padding: 46px 0px;
  }

  .cta-button {
    width: 351px;
    padding-bottom: 46px;
  }
`;

const GradientBottom = styled.div`
    width: 100%;
    height: 50px;
    background: linear-gradient(#020D1B 50%, white 100%);
  
`;

const GradientTop = styled.div`
    width: 100%;
    height: 50px;
    background: linear-gradient(#020D1B 50%, white 100%);
    transform: rotate(180deg);
`

export default FourthSection;
