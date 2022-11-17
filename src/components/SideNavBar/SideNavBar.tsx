import { FC, useState } from "react";
import StyledNavBar from ".";
import { CaretLeft, CaretRight, Menu, Settings } from "../../assets";
import { BarChart } from "../../assets/BarChartIcon";
import { myTheme } from "../../theme";
import { ColoredIcon } from "../ColoredIcon/ColoredIcon";
import { Header } from "../Header/Header";
import fox from "../../fox.png";
import { IconButton } from "../IconButton/IconButton";

interface Props {
  selectedElement: string;
  onSelectElement: (element: string) => void;
}

export const SideNavBar: FC<Props> = ({ selectedElement, onSelectElement }) => {
  const [open, setOpen] = useState(true);

  const isSelected = (element: string) => {
    return element === selectedElement;
  };
  return (
    <StyledNavBar.Container>
      <StyledNavBar.NavBar close={!open}>
        <StyledNavBar.ButtonContainer open={open}>
          <IconButton
            onClick={() => setOpen(!open)}
            colorPrimary={myTheme.colors.lightGray}
            colorSecondary={myTheme.colors.dark.gray}
          >
            {open ? (
              <CaretLeft color={myTheme.colors.grape} />
            ) : (
              <CaretRight color={myTheme.colors.grape} />
            )}
          </IconButton>
        </StyledNavBar.ButtonContainer>
        <StyledNavBar.HeaderContainer>
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
        </StyledNavBar.HeaderContainer>
        <StyledNavBar.List>
          <StyledNavBar.ListItem>
            <StyledNavBar.Link
              active={isSelected("dashboard")}
              onClick={() => onSelectElement("dashboard")}
            >
              <StyledNavBar.Icon>
                <BarChart
                  color={
                    isSelected("dashboard")
                      ? myTheme.colors.grape
                      : myTheme.colors.dark.green
                  }
                  width="24"
                  height="24"
                />
              </StyledNavBar.Icon>
              <StyledNavBar.LinkText visible={open}>
                Dashboard
              </StyledNavBar.LinkText>
            </StyledNavBar.Link>
          </StyledNavBar.ListItem>
          <StyledNavBar.ListItem>
            <StyledNavBar.Link
              active={isSelected("all")}
              onClick={() => onSelectElement("all")}
            >
              <StyledNavBar.Icon>
                <Menu
                  color={
                    isSelected("all")
                      ? myTheme.colors.grape
                      : myTheme.colors.dark.green
                  }
                  width="24"
                  height="24"
                />
              </StyledNavBar.Icon>
              <StyledNavBar.LinkText visible={open}>
                All Expenses
              </StyledNavBar.LinkText>
            </StyledNavBar.Link>
          </StyledNavBar.ListItem>
          <StyledNavBar.Line />
          <StyledNavBar.ListItem>
            <StyledNavBar.Link
              active={isSelected("settings")}
              onClick={() => onSelectElement("settings")}
            >
              <StyledNavBar.Icon>
                <Settings
                  color={
                    isSelected("settings")
                      ? myTheme.colors.grape
                      : myTheme.colors.dark.green
                  }
                  width="24"
                  height="24"
                />
              </StyledNavBar.Icon>
              <StyledNavBar.LinkText visible={open}>
                Settings
              </StyledNavBar.LinkText>
            </StyledNavBar.Link>
          </StyledNavBar.ListItem>
        </StyledNavBar.List>
      </StyledNavBar.NavBar>
    </StyledNavBar.Container>
  );
};
