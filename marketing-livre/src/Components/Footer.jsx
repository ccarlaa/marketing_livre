import styled from "styled-components";
import colors from "../Style/colors";
import Text from "./Text";
import React from "react";
import instagram from "../Images/instagram.png";
import linkedin from "../Images/linkedin.png";
import facebook from "../Images/facebook.png";
import { ArrowDownIcon } from "@heroicons/react/24/outline";


const Footer = () => {

    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

  return (
    <FooterComponent>
        <div className="back-top-mobile" onClick={handleClick}> 
            <ArrowDownIcon  className="icon-back-top"/>
        </div>
        <div className="social-media">
            <a href="https://www.instagram.com/marketing.livrefacil/" target="_blank" rel="noopener noreferrer" className="social-media-icon">
                <img src={instagram} />
            </a>
            <div className="social-media-icon">
                <img src={linkedin} />
            </div>
            <div className="social-media-icon">
                <img src={facebook} />
            </div>
        </div>
        <Text size="sm" type="body" color={'white'}>Copyright 2024 © Marketing Livre Fácil. Todos os Direitos Reservados.</Text>
        <div className="back-top" onClick={handleClick}> 
            <ArrowDownIcon  className="icon-back-top"/>
        </div>
    </FooterComponent>
  );
};

const FooterComponent = styled.footer`
    position: absolute;
    bottom: 0;
    left: 0;
    height: auto;
    width: 100%;
    background-color: ${colors.neutral[950]};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 40px 150px;
    text-align: center;

    @media (max-width: 768px) {
        padding: 20px 20px;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .social-media {
        display: flex;
        gap: 10px;

        @media (max-width: 768px) {
            padding: 20px 0px;
        }
    }

    .social-media-icon {
        width: 40px;
        height: 40px;
        background: linear-gradient(150deg,  rgba(159,105,229,1) 0%, rgba(200,165,47,1) 100%);
        border-radius: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        @media (max-width: 768px) {
            width: 32px;
            height: 32px;
        }
    }

    .back-top-mobile {
        min-width: 50px;
        height: 50px;
        border-radius: 8px;
        background-color: rgba(255, 255, 255, 0.1); 
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;     
        transform: rotate(180deg);
        cursor: pointer;
        display: none;

        @media (max-width: 768px) {
            min-width: 40px;
            height: 40px;
            display: flex;
        }

        &:hover {
            background-color: ${colors.neutral[700]};
        }

        .icon-back-top {
            width: 24px;
        }
    }

    .back-top {
        min-width: 50px;
        height: 50px;
        border-radius: 8px;
        background-color: rgba(255, 255, 255, 0.1); 
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;     
        transform: rotate(180deg);
        cursor: pointer;

        @media (max-width: 768px) {
            display: none;
        }

        &:hover {
            background-color: ${colors.neutral[700]};
        }

        .icon-back-top {
            width: 24px;
        }
    }
`;

export default Footer;
