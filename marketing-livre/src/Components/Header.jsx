import styled from "styled-components";
import colors from "../Style/colors";
import Button from "./Button";
import React, { useEffect, useState } from "react";
import logo from "../Images/logo.png";

const Header = () => {
    const [textColor, setTextColor] = useState("section-start");

    function DiscoverPosition(id) {
        if (typeof document != "undefined") {
          const element = document.querySelector(`#section-${id}`);
          if (element != null) {
            const rect = element.getBoundingClientRect();
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const position = rect.top + scrollTop;
            return Math.floor(position) - 100;
          }
        }
      }
    
      const positionStart = DiscoverPosition("start");
      const positionConsultancy = DiscoverPosition("consultancy");
      const positionAbout = DiscoverPosition("about");
      const positionServices = DiscoverPosition("services");
      const positionPortfolio = DiscoverPosition("portfolio");
      const positionComments = DiscoverPosition("comments");
      const positionFaq = DiscoverPosition("faq");

      useEffect(function () {
        function changeColor() {
          console.log(window.scrollY)
          console.log(positionFaq)
          if (
            positionStart != undefined &&
            positionConsultancy != undefined &&
            positionAbout != undefined &&
            positionServices != undefined &&
            positionPortfolio != undefined &&
            positionComments != undefined &&
            positionFaq != undefined 
          ) {
            if (window.scrollY < positionConsultancy && positionConsultancy) {
              setTextColor("section-start");
            }
            if (window.scrollY >= positionConsultancy && window.screenY < positionAbout) {
                setTextColor("section-consultancy");
              }
            if (window.scrollY >= positionAbout && window.screenY < positionServices) {
              setTextColor("section-about");
            }
            if (window.scrollY >= positionServices && window.screenY < positionPortfolio) {
              setTextColor("section-services");
            }
            if (window.scrollY >= positionPortfolio && window.screenY < positionComments) {
              setTextColor("section-portfolio");
            }
            if (window.scrollY >= positionComments && window.screenY < positionFaq) {
              setTextColor("section-comments");
            }
            if (window.scrollY >= positionFaq - 300) {
              setTextColor("section-faq");
            }
          }
        }
    
        window.addEventListener("scroll", changeColor);
      },);
    
      function scrollToElement(id) {
        const element = document.querySelector(`${id}`);
        if (element != null) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }

    return (
    <HeaderComponent textColor={textColor}>
        <div className="logo" onClick={() => scrollToElement('#section-start')}>
            <img src={logo} />
        </div>
        <div className="sections">
            <div className="section-start" onClick={() => scrollToElement('#section-start')}>
                início
            </div>
            <div className="section-consultancy" onClick={() => scrollToElement('#section-consultancy')}>
                consultoria
            </div>
            <div className="section-about" onClick={() => scrollToElement("#section-about")}>
                sobre nós
            </div>
            <div className="section-services" onClick={() => scrollToElement("#section-services")}>
                serviços
            </div>
            <div className="section-portfolio" onClick={() => scrollToElement("#section-portfolio")}>
                portfólio
            </div>
            <div className="section-comments" onClick={() => scrollToElement("#section-comments")}>
                depoimentos
            </div>
            <div className="section-faq" onClick={() => scrollToElement("#section-faq")}>
                faq
            </div>
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
    z-index: 20;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 200px;
    background-color: ${colors.neutral[50]};
    
    .logo {
      cursor: pointer;
    }

    .button-cta {
        width: 260px;
    }

    .sections {
        display: flex;
        justify-content: space-between;
        gap: 20px;
        font-size: 16px;
        cursor: pointer;
        font-weight: 500;
        text-transform: uppercase;
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
      color: ${props => props.textColor == "section-services" ? colors.primary[500] : colors.neutral[950]};
    }

    .section-portfolio {
      color: ${props => props.textColor == "section-portfolio" ? colors.primary[500] : colors.neutral[950]};
    }

    .section-comments {
      color: ${props => props.textColor == "section-comments" ? colors.primary[500] : colors.neutral[950]};
    }

    .section-faq {
      color: ${props => props.textColor == "section-faq" ? colors.primary[500] : colors.neutral[950]};
    }
`;


export default Header;
