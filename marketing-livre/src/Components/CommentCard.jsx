import React from "react";
import styled from "styled-components";
import Text from "./Text";
import colors from "../Style/colors";
import Stars from "./Stars";

const CommentCard = ({img, name, comment, description, numberStars = 5}) => {

  const CommentCardComponent = styled.div`
  min-width: 450px;
  height: 280px;
  border-radius: 16px;
  background-color: white;
  padding: 24px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 1024px) {
    min-width: 300px;
  }

  @media (max-width: 768px) {
    min-width: 150px;
    height: 300px;
  }


  .comment {
    text-align: left;
    padding-bottom: 12px;
  }

  .avatar {
    width: 60px;
    height: 60px;
    border-radius: 100%;
    background-color: orange;
    background: url(${img}) center/cover; 
  }

  .description {
    text-align: left;
  }

  .client-infos {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .infos-left {
      display: flex;
      align-items: center;
      gap: 10px;
      text-align: left;
    }
  }
`;

  return (
    <CommentCardComponent>
        <div className="comment">
          <Text size="sm" type="headline" color={colors.primary[950]}>
            “{comment}”
          </Text>
        </div>
        <div className="description">
          <Text size="sm" type="body" color={colors.neutral[500]}>
            {description}
          </Text>
        </div>
        <div className="client-infos">
          <div className="infos-left">
            <div className="avatar" />
            <div className="infos">
              <Text size="md" type="body" color={colors.primary[950]}>
                {name} 
              </Text>
            </div>
          </div>
          <Stars number={numberStars}/>
        </div>
    
    </CommentCardComponent>
  );
};



export default CommentCard;

