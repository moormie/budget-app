import { FC, useState } from "react";
import StyledNavBar from ".";

export const NavBar: FC = () => {
  const [selected, setSelected] = useState<"first" | "second">("first");
  return (
    <StyledNavBar.Container>
      <StyledNavBar.List>
        <StyledNavBar.ListItem>
          <StyledNavBar.Link
            active={selected === "first"}
            onClick={() => setSelected("first")}
          >
            Test
          </StyledNavBar.Link>
        </StyledNavBar.ListItem>
        <StyledNavBar.ListItem>
          <StyledNavBar.Link
            active={selected === "second"}
            onClick={() => setSelected("second")}
          >
            Test
          </StyledNavBar.Link>
        </StyledNavBar.ListItem>
      </StyledNavBar.List>
    </StyledNavBar.Container>
  );
};
