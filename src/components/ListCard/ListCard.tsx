import { FC, useState } from "react";
import StyledListCard from ".";
import { Trash } from "../../assets";
import { IconButton } from "../IconButton/IconButton";
import { RoundedFlexContainer } from "../RoundedFlexContainer";

interface ListCardProps {
  icon: JSX.Element;
  mainLabel: string;
  sublabel?: string;
  endLabel: string;
  endSublabel: string;
  onClickDelete?: () => void;
}

export const ListCard: FC<ListCardProps> = ({
  icon,
  mainLabel,
  sublabel,
  endLabel,
  endSublabel,
  onClickDelete,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <RoundedFlexContainer align="center" onClick={() => setOpen(!open)}>
      {icon}
      <StyledListCard.TitleContainer>
        <StyledListCard.Title>{mainLabel}</StyledListCard.Title>
        {sublabel && (
          <StyledListCard.Subtitle>{sublabel}</StyledListCard.Subtitle>
        )}
      </StyledListCard.TitleContainer>
      <StyledListCard.EndContainer>
        <div>{endLabel}</div>
        <StyledListCard.SubText>{endSublabel}</StyledListCard.SubText>
      </StyledListCard.EndContainer>

      <StyledListCard.DeleteContainer visible={open}>
        <IconButton onClick={onClickDelete ? onClickDelete : () => {}}>
          <Trash color="#903d3c" />
        </IconButton>
      </StyledListCard.DeleteContainer>
    </RoundedFlexContainer>
  );
};
