import styled from "styled-components";
import colors from "../Style/colors";
import Text from "../Components/Text";

const Header = () => {
  return (
    <HeaderComponent>
      <Text size="sm" type="headline" color={colors.primary[500]}>oe</Text>
    </HeaderComponent>
  )
}

const HeaderComponent = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  height: 92px;
  width: 100%;
  background-color: ${colors.neutral[50]};
`

export default Header;
