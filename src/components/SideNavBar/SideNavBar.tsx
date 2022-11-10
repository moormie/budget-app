import { FC } from "react";
import StyledNavBar from ".";
import { Menu, Settings } from "../../assets";
import { BarChart } from "../../assets/BarChartIcon";
import { myTheme } from "../../theme";
import { ColoredIcon } from "../ColoredIcon/ColoredIcon";
import { Header } from "../Header/Header";
import fox from "../../fox.png";

interface Props {
  selectedElement: string;
  onSelectElement: (element: string) => void;
}

export const SideNavBar: FC<Props> = ({ selectedElement, onSelectElement }) => {
  const isSelected = (element: string) => {
    return element === selectedElement;
  };
  return (
    <StyledNavBar.Container>
      <div style={{ margin: "40px 16px" }}>
        <Header
          title="John Doe"
          subtitle="Welcome"
          startElement={
            <ColoredIcon
              colorPrimary={myTheme.colors.grape}
              colorSecondary={myTheme.colors.grape}
            >
              <img src={fox} alt="" style={{ width: 36, height: 36 }} />
            </ColoredIcon>
          }
        />
      </div>
      <StyledNavBar.List>
        <StyledNavBar.ListItem>
          <StyledNavBar.Link
            active={isSelected("dashboard")}
            onClick={() => onSelectElement("dashboard")}
          >
            <BarChart
              color={
                isSelected("dashboard")
                  ? myTheme.colors.grape
                  : myTheme.colors.dark.green
              }
              width="24"
              height="24"
            />
            <StyledNavBar.LinkText>Dashboard</StyledNavBar.LinkText>
          </StyledNavBar.Link>
        </StyledNavBar.ListItem>
        <StyledNavBar.ListItem>
          <StyledNavBar.Link
            active={isSelected("all")}
            onClick={() => onSelectElement("all")}
          >
            <Menu
              color={
                isSelected("all")
                  ? myTheme.colors.grape
                  : myTheme.colors.dark.green
              }
              width="24"
              height="24"
            />

            <StyledNavBar.LinkText>All Expenses</StyledNavBar.LinkText>
          </StyledNavBar.Link>
        </StyledNavBar.ListItem>
        <StyledNavBar.Line />
        <StyledNavBar.ListItem>
          <StyledNavBar.Link
            active={isSelected("settings")}
            onClick={() => onSelectElement("settings")}
          >
            <Settings
              color={
                isSelected("settings")
                  ? myTheme.colors.grape
                  : myTheme.colors.dark.green
              }
              width="24"
              height="24"
            />
            <StyledNavBar.LinkText>Settings</StyledNavBar.LinkText>
          </StyledNavBar.Link>
        </StyledNavBar.ListItem>
      </StyledNavBar.List>
    </StyledNavBar.Container>
  );
};
