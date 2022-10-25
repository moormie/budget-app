import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
`;

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

const DeleteContainer = styled.div<{ visible: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => (props.visible ? "50px" : "0px")};
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
  opacity: ${(props) => (props.visible ? "1" : "0")};
  height: ${(props) => (props.visible ? "100%" : "0px")};
  margin-left: ${(props) => (props.visible ? "16px" : "0px")};
  transition: all 0.3s ease-in-out;
`;

const StyledListCard = {
  Container,
  TitleContainer,
  Title,
  Subtitle,
  EndContainer,
  SubText,
  DeleteContainer,
};

export default StyledListCard;
