import { FC } from "react";
import StyledNavBar from ".";

interface Props {
  elements: string[];
  selectedElement: string;
  onSelectElement: (element: string) => void;
}

export const NavBar: FC<Props> = ({
  elements,
  selectedElement,
  onSelectElement,
}) => {
  return (
    <StyledNavBar.Container>
      <StyledNavBar.List>
        {elements.map((element) => (
          <StyledNavBar.ListItem key={element}>
            <StyledNavBar.Link
              active={element === selectedElement}
              onClick={() => onSelectElement(element)}
            >
              {element}
            </StyledNavBar.Link>
          </StyledNavBar.ListItem>
        ))}
      </StyledNavBar.List>
    </StyledNavBar.Container>
  );
};
