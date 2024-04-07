import React, { useState } from 'react';
import styled from 'styled-components';
import { Bars3Icon } from "@heroicons/react/24/outline";
import colors from '../Style/colors';
import Button from './Button';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [textColor, setTextColor] = useState("section-start");

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  function scrollToElement(id) {
    setTextColor(id.replace('#', ''))
    console.log(textColor)
    const element = document.querySelector(`${id}`);
    if (element != null) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <>
      <HeaderIcon onClick={toggleSidebar}>
        <Bars3Icon className='icon'/>
      </HeaderIcon>
      <SidebarContainer isOpen={isOpen} textColor={textColor}>
        <div className='close-icon' onClick={toggleSidebar}>
          <Bars3Icon className='icon'/>
        </div>
        <div className="sections">
            <div className="section-start" onClick={() => {scrollToElement('#section-start'); toggleSidebar()}}>
                início
            </div>
            <div className="section-consultancy" onClick={() => {scrollToElement('#section-consultancy'); toggleSidebar()}}>
                consultoria
            </div>
            <div className="section-about" onClick={() => {scrollToElement("#section-about"); toggleSidebar()}}>
                sobre nós
            </div>
            <div className="section-services" onClick={() => {scrollToElement("#section-services-mobile"); toggleSidebar()}}>
                serviços
            </div>
            <div className="section-portfolio" onClick={() => {scrollToElement("#section-portfolio-mobile"); toggleSidebar()}}>
                portfólio
            </div>
            <div className="section-comments" onClick={() => {scrollToElement("#section-comments"); toggleSidebar()}}>
                depoimentos
            </div>
            <div className="section-faq" onClick={() => {scrollToElement("#section-faq");toggleSidebar()}}>
                faq
            </div>
            <div className="cta-button">
                <Button label="fale conosco" />
            </div>
        </div>

      </SidebarContainer>
    </>
  );
};

export default Sidebar;


const HeaderIcon = styled.div`
    width: 40px;
    height: 40px;
    background: linear-gradient(45deg,  rgba(159,105,229,1) 0%, rgba(200,165,47,1) 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    color: white;
    cursor: pointer;

    .icon {
        width: 30px;
    }
`


const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  right: ${props => (props.isOpen ? '0' : '-300px')};
  width: 300px;
  height: 100%;
  background-color: white;
  transition: right 0.3s ease; 
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: end;

  .close-icon {
    width: 40px;
    height: 40px;
    background: linear-gradient(45deg,  rgba(159,105,229,1) 0%, rgba(200,165,47,1) 100%);
    border-radius: 8px;
    color: white;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    .icon {
        width: 30px;
    }
  }

  .sections {
    display: flex;
    flex-direction: column;
    color: ${colors.neutral[950]};
    text-align: right;
    gap: 40px;
    width: 100%;
  }

  .section-start {
      color: ${props => props.textColor == "section-start" ? colors.primary[500] : colors.neutral[950]};
    }

    .section-consultancy {
      color: ${props => props.textColor == "section-consultancy" ? colors.primary[500] : colors.neutral[950]};
    }

    .section-about {
      color: ${props => props.textColor == "section-about" ? colors.primary[500] : colors.neutral[950]};
    }

    .section-services {
      color: ${props => props.textColor == "section-services-mobile" ? colors.primary[500] : colors.neutral[950]};
    }

    .section-portfolio {
      color: ${props => props.textColor == "section-portfolio-mobile" ? colors.primary[500] : colors.neutral[950]};
    }

    .section-comments {
      color: ${props => props.textColor == "section-comments" ? colors.primary[500] : colors.neutral[950]};
    }

    .section-faq {
      color: ${props => props.textColor == "section-faq" ? colors.primary[500] : colors.neutral[950]};
    }

    .cta-button {
        width: 100%;
    }
`;
