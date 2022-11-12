import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(
    ${(props) => props.theme.colors.yellowGreen},
    ${(props) => props.theme.colors.dark.yellowGreen}
  );
  width: 220px;
  display: flex;
  height: 100vh;
  padding: 8px;
  box-shadow: 2px 0px 20px #888888;
  box-sizing: border-box;
`;

const HeaderContainer = styled.div`
  margin: 40px 16px;
`;

const List = styled.ul`
  list-style-type: none;
  width: 100%;
  padding: 0;
`;

const ListItem = styled.li`
  padding: 4px 16px;
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

const LinkText = styled.div`
  margin: 8px;
`;

const Line = styled.hr`
  border: 1px solid ${(props) => props.theme.colors.grape};
  margin: 24px 0;
`;

const StyledNavBar = {
  Container,
  HeaderContainer,
  List,
  ListItem,
  Link,
  LinkText,
  Line,
};

export default StyledNavBar;
