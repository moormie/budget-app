import styled from "styled-components";

const NavBar = styled.div<{ close?: boolean }>`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  flex-direction: column;
  background: linear-gradient(
    ${(props) => props.theme.colors.yellowGreen},
    ${(props) => props.theme.colors.dark.yellowGreen}
  );
  width: ${(props) => (props.close ? "98px" : "220px")};
  display: flex;
  height: 100%;
  padding: 8px;
  box-shadow: 2px 0px 20px #888888;
  box-sizing: border-box;
  transition: 0.4s ease-in;
`;

const Container = styled.div``;

const ButtonContainer = styled.div<{ open: boolean }>`
  position: absolute;
  left: ${(props) => (props.open ? "200px" : "80px")};
  transition: 0.4s ease-in;
  top: 60px;
`;

const HeaderContainer = styled.div`
  margin: 40px 16px;
  height: 55px;
  overflow: hidden;
`;

const List = styled.ul`
  list-style-type: none;
  width: 100%;
  padding: 0;
`;

const ListItem = styled.li`
  margin: 4px 16px;
  height: 50px;
  overflow: hidden;
`;

const Link = styled.a<{ active?: boolean }>`
  display: flex;
  align-items: center;
  font-weight: ${(props) => (props.active ? "bold" : "normal")};
  color: ${(props) =>
    props.active
      ? (props) => props.theme.colors.dark.grape
      : (props) => props.theme.colors.dark.green};
  text-decoration: none;
  height: 100%;
  width: 100%;
  -webkit-transition: 0.4s;
  transition: 0.2s ease-in;
  :hover {
    font-weight: bold;
  }
  cursor: pointer;
`;

const Icon = styled.div`
  min-width: 50px;
  text-align: center;
`;

const LinkText = styled.div<{ visible?: boolean }>`
  margin: 8px;
  white-space: nowrap;
`;

const Line = styled.hr`
  border: 1px solid ${(props) => props.theme.colors.grape};
  margin: 24px 0;
`;

const StyledNavBar = {
  NavBar,
  Container,
  ButtonContainer,
  HeaderContainer,
  List,
  ListItem,
  Link,
  Icon,
  LinkText,
  Line,
};

export default StyledNavBar;
