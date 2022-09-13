import styled from "styled-components";

const darkTurquoise = "#417779";
const lightTurquoise = "#87bfc1";

const Container = styled.div`
  background-color: ${lightTurquoise};
  border-radius: 16px;
  height: 58px;
  display: flex;
  align-items: center;
  padding: 4px;
`;

const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  display: flex;
  align-items: space-between;
  height: 100%;
  width: 100%;
`;

const ListItem = styled.li`
  float: left;
  width: 100%;
`;

const Link = styled.a<{ active?: boolean }>`
  background-color: ${(props) =>
    props.active ? darkTurquoise : lightTurquoise};
  color: ${(props) => (props.active ? lightTurquoise : darkTurquoise)};
  border-radius: 14px;
  text-align: center;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  cursor: pointer;
`;

const StyledNavBar = {
  Container,
  List,
  ListItem,
  Link,
};

export default StyledNavBar;
