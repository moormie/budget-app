import styled from "styled-components";

const Container = styled.div<{ visible: boolean }>`
  width: calc(100% - 8px);
  border-radius: 12px;
  margin: 0 4px;
  z-index: 1;
  background-color: ${(props) => props.theme.colors.yellowGreen};
  border-radius: 12px;
  position: absolute;
  animation: ${(props) =>
      props.visible ? props.theme.animation.show : props.theme.animation.hide}
    0.3s ease-out;
`;

const List = styled.ul`
  list-style-type: none;
  border-radius: 12px;
  padding: 0;
  margin: 0;
  width: 100%;
  max-height: 159px;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 5px;
    height: calc(100% - 12px);
  }
  ::-webkit-scrollbar-track {
    margin: 8px 0;
    background: ${(props) => props.theme.colors.yellowGreen};
    border-radius: 4px;
  }
  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 3px;
  }
`;

const ListItem = styled.li<{ selected?: boolean }>`
  padding: 8px 12px;
  border-bottom: 1px solid ${(props) => props.theme.colors.green};
  :last-child {
    border-bottom: none;
  }
  :hover {
    background-color: ${(props) => props.theme.colors.green};
  }
  background-color: ${(props) =>
    props.selected ? props.theme.colors.dark.green : ""};
  color: ${(props) =>
    props.selected ? props.theme.colors.yellowGreen : "black"};
`;

const StyledMenuList = {
  Container,
  List,
  ListItem,
};

export default StyledMenuList;
