import styled from "styled-components";

const Container = styled.div`
  height: 72px;
  background-color: white;
  border-radius: 18px;
  display: flex;
  align-items: center;
  padding: 8px 16px;
  box-sizing: border-box;
  box-shadow: rgba(17, 17, 17, 0.05) 0px 0px 12px;
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
  TitleContainer,
  EndContainer,
  SubText,
};

export default StyledListCard;
