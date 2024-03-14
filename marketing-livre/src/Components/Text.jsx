import styled from "styled-components";
import colors from "../Style/colors";

const Text = ({size = "md", type = "body", color = colors.neutral[700], children}) => {

  const textSize = () => {
    if(type == "headline") {
      if(size == "xl") {
        return "64px";
      }
      if(size == "lg") {
        return "40px";
      }
      if(size == "md") {
        return "32px";
      }
      if(size == "sm") {
        return "24px";
      }
    }

    if(type == "body") {
      if(size == "md") {
        return "20px";
      }
      if(size == "sm") {
        return "16px";
      }
    }

    if(type == "button") {
      return "20px";
    }
  }

  const textWeight = () => {
    if(type == "headline") {
      return "700";
    }
    if(type == "body") {
      return "500";
    }
  }

  return (
    <TextComponent size={textSize()} weight={textWeight()} color={color}>
      {children}
    </TextComponent>
  )
}

const TextComponent = styled.div`
  font-weight: ${props => props.weight};
  color: ${props => props.color};
  font-size: ${props => props.size};
`
export default Text;