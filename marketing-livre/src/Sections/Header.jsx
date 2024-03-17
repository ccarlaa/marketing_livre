import styled from "styled-components";
import colors from "../Style/colors";
import Text from "../Components/Text";
import Button from "../Components/Button";
import React from "react";

const Header = () => {
  return (
    <HeaderComponent>
      <Text size="xl" type="headline" color={colors.primary[500]}>oe</Text>
      <Button label="teste"></Button>
    </HeaderComponent>
  );
};

const HeaderComponent = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  height: 92px;
  width: 100%;
  background-color: ${colors.neutral[50]};
`;

export default Header;
