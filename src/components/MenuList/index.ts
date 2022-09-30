import styled from "styled-components";

const Container = styled.div<{ open: boolean }>`
  width: calc(100% - 8px);
  margin: 0 4px;
  background-color: ${(props) => props.theme.colors.yellowGreen};
  border-radius: 12px;
  position: absolute;
  opacity: ${(props) => (props.open ? 1 : 0)};
  visibility: ${(props) => (props.open ? "visible" : "hidden")};
  transition: all 320ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    transform 213ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  width: 100%;
`;

const ListItem = styled.li<{ selected?: boolean }>`
  padding: 8px 12px;
  border-bottom: 1px solid ${(props) => props.theme.colors.green};
  :last-child {
    border-bottom: none;
    border-radius: 0 0 12px 12px;
  }
  :first-child {
    border-radius: 12px 12px 0 0;
  }
  :hover {
    background-color: ${(props) => props.theme.colors.green};
  }
  background-color: ${(props) =>
    props.selected ? props.theme.colors.green : ""};
`;

const StyledMenuList = {
  Container,
  List,
  ListItem,
};

export default StyledMenuList;
