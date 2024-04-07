import React from "react";
import styled from "styled-components";
import Text from "../../Components/Text";
import colors from "../../Style/colors";
import Accordion from "../../Components/Accordion";

const questions = [
    {
        question: "Por que escolher a Marketing Livre Fácil?",
        answer: "Escolha personalização e resultados concretos. Nossa equipe transforma sua visão em sucesso, destacando seu negócio com nossa mistura única de criatividade, inovação e clareza."
    },
    {
        question: "Como medimos o sucesso das campanhas?",
        answer: "Seu crescimento reflete nosso sucesso. Utilizamos KPIs específicos e análises detalhadas, focando em um retorno substancial sobre seu investimento."
    },
    {
        question: "Que serviços de marketing oferecemos?",
        answer: "Dispomos de uma gama completa de serviços, desde SEO até branding, todos projetados para garantir que sua mensagem atinja o público ideal da forma mais eficaz."
    },
    {
        question: "Quando ver os resultados?",
        answer: "Embora alguns resultados possam ser imediatos, focamos em sucesso duradouro e comunicamos prazos realistas, mantendo-o informado a cada passo."
    },
    {
        question: "Oferecemos planos personalizados?",
        answer: "Sim, nossos serviços são moldados às necessidades e ao orçamento de cada cliente, garantindo soluções que se encaixam perfeitamente ao seu negócio."
    },
    {
        question: "Como mantemos os clientes informados?",
        answer: "Priorizamos uma comunicação transparente, fornecendo atualizações regulares e relatórios detalhados para garantir que você esteja sempre no loop."
    },
    {
        question: "Temos experiência no seu setor?",
        answer: "Nossa equipe é versátil e experiente, adaptando estratégias para atender especificidades de diversos setores com eficácia."
    },
    {
        question: "O que nos torna únicos?",
        answer: "Nosso compromisso é com o seu sucesso. Nos distinguimos pela nossa dedicação profunda e uma abordagem inovadora e personalizada para cada cliente."
    },
    {
        question: "Como mantemos os clientes informados?",
        answer: "Priorizamos uma comunicação transparente, fornecendo atualizações regulares e relatórios detalhados para garantir que você esteja sempre no loop."
    },
    {
        question: "Como começar com a Marketing Livre Fácil?",
        answer: "Iniciar sua jornada de marketing conosco é fácil. Entre em contato hoje e vamos desenhar juntos o caminho para o sucesso do seu negócio."
    },
    {
        question: " Por que iniciar com uma consultoria gratuita na Marketing Livre Fácil?",
        answer: "Optar por nossa consultoria gratuita é o primeiro passo em direção ao sucesso mútuo. Não é apenas uma sessão informativa, é uma imersão na filosofia e abordagem únicas da Marketing Livre Fácil. Esta consulta é a porta de entrada para entender como nossos serviços se alinham especificamente às suas necessidades e objetivos. Nós nos dedicamos não apenas à execução de estratégias, mas ao estabelecimento de uma parceria verdadeira, focada nos seus resultados. Com a consultoria gratuita, mostramos que nosso compromisso vai além de uma mera contratação: estamos investidos no seu sucesso tanto quanto você."
    }
]

const SixthSection = () => {
    return (
        <SixthSectionComponent id="section-faq">
            <div className="header">
                <Text type="headline" size="lg" color={colors.neutral[950]}>
                    Perguntas frequentes
                </Text>
            </div>
            <div className="questions">
            {
                questions.map((question, index) => {
                    return (
                        <Accordion question={question.question} answer={question.answer} />
                    )
                })
            }
            </div>
        </SixthSectionComponent>
    );
};

const SixthSectionComponent = styled.section`
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: auto;
    padding: 40px 200px 100px 200px;
    background-color: ${colors.neutral[50]};
    position: relative;

    @media (max-width: 1024px) {
        padding: 40px 100px 100px 100px;
    }

    @media (max-width: 768px) {
        padding: 40px 20px 120px 20px;
    }

    .header {
        padding: 20px 0px;
        width: 60%;

        @media (max-width: 768px) {
            width: 100%;
        }
    }

    .questions {
        width: 100%;
        display: grid;
        grid-template-rows: auto auto; 
        grid-template-columns: 1fr 1fr; 
        gap: 10px;
        padding-top: 40px;

        @media (max-width: 768px) {
            display: flex;
            flex-direction: column;
        }
    }
`;

export default SixthSection;