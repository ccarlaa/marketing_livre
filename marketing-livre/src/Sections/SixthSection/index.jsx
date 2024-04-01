import React from "react";
import styled from "styled-components";
import Text from "../../Components/Text";
import colors from "../../Style/colors";
import Accordion from "../../Components/Accordion";

const SixthSection = () => {
    return (
        <SixthSectionComponent>
            <div className="header">
                <Text type="headline" size="lg" color={colors.neutral[950]}>
                    Perguntas frequentes
                </Text>
            </div>

            <Accordion />

        </SixthSectionComponent>
    );
};

const SixthSectionComponent = styled.section`
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
`;

export default SixthSection;