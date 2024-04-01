import styled from "styled-components";
import colors from "../Style/colors";
import Text from "./Text";
import Button from "./Button";
import React, { useState } from "react";
import logo from "../Images/logo.png"
const Header = () => {
    const [section, setSection] = useState(1);

    const active = (sectionActive) => {
        if(section == sectionActive) {
            return colors.primary[500];
        }
        else {
            return colors.neutral[950];
        }
    }

    return (
    <HeaderComponent>
        <div className="logo">
            <img src={logo} />
        </div>
        <div className="sections">
            <Section className="section" onClick={() => setSection(1)} color={active(1)}>
                início
            </Section>
            <Section className="section" onClick={() => setSection(2)} color={active(2)}>
                sobre nós
            </Section>
            <Section className="section" onClick={() => setSection(3)} color={active(3)}>
                serviços
            </Section>
            <Section className="section" onClick={() => setSection(4)} color={active(4)}>
                Sectionortfólio
            </Section>
            <Section className="section" onClick={() => setSection(5)} color={active(5)}>
                deSectionoimentos
            </Section>
            <Section className="section" onClick={() => setSection(6)} color={active(6)}>
                contato
            </Section>
        </div>
        <div className="button-cta">
            <Button label="CONSULTORIA GRÁTIS" size="sm" />
        </div>
    </HeaderComponent>
  );
};

const HeaderComponent = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    height: 92px;
    width: 100%;
    z-index: 10;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 200px;
    background-color: ${colors.neutral[50]};

    .button-cta {
        width: 260px;
    }

    .sections {
        display: flex;
        justify-content: space-between;
        gap: 20px;
    }
`;

const Section = styled.div`
    font-size: 16px;
    cursor: pointer;
    color: ${props => props.color};
    font-weight: 500;
    text-transform: uppercase;
    
`

export default Header;
