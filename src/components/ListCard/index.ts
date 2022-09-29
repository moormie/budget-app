import styled from "styled-components";

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin: 0 16px;
`;

const Title = styled.p`
  margin: 0;
  font-size: 20px;
`;

const Subtitle = styled.p`
  margin: 0;
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
  TitleContainer,
  Title,
  Subtitle,
  EndContainer,
  SubText,
};

export default StyledListCard;
