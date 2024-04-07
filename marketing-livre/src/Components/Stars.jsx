import React from "react";
import styled from "styled-components";
import { StarIcon } from "@heroicons/react/20/solid";
import colors from "../Style/colors";

const StarsContainer = styled.div`
    display: flex;
    gap: 5px;

    
    .icon {
        width: 20px;

        @media (max-width: 768px) {
          width: 16px;
          background-color: none;
      }
    }
`;

const Star = styled(StarIcon)`

  ${({ active }) => {
    if (active) {
      return `color: #FFBF1C`;
    } else {
      return `color: ${colors.neutral[700]}`;
    }
  }}
`;

const Stars = ({ number = 3 }) => {
  const auxArray = new Array(5).fill(0);

  return (
    <StarsContainer>
      {auxArray.map((_, index) => (
        <Star
          key={index}
          active={index < number}
          className="icon"
        />
      ))}
    </StarsContainer>
  );
};

export default Stars;
