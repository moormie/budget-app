import styled from "styled-components";

const gray = "#e0e0e0";

const Container = styled.div`
  height: 64px;
  background-color: white;
  border-radius: 12px;
  display: flex;
  align-items: center;
  padding: 8px 16px;
  box-sizing: border-box;
  box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px,
    rgba(17, 17, 26, 0.1) 0px 0px 8px;
`;

const IconContainer = styled.div`
  width: 48px;
  height: 48px;
  background-color: ${gray};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  margin: 16px;
  font-size: 20px;
`;

const EndContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: end;
`;

const SubText = styled.div`
  font-weight: 300;
  font-size: 12px;
  text-align: end;
`;

const StyledListCard = {
  Container,
  IconContainer,
  TitleContainer,
  EndContainer,
  SubText,
};

export default StyledListCard;
