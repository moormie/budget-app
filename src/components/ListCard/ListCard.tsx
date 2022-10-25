import { FC } from "react";
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
  selected?: boolean;
  onSelect?: () => void;
  onClickDelete?: () => void;
}

export const ListCard: FC<ListCardProps> = ({
  icon,
  mainLabel,
  sublabel,
  endLabel,
  endSublabel,
  selected,
  onSelect,
  onClickDelete,
}) => {
  return (
    <RoundedFlexContainer align="center">
      <StyledListCard.Container onClick={onSelect}>
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
      </StyledListCard.Container>
      <StyledListCard.DeleteContainer visible={selected === true}>
        <IconButton onClick={onClickDelete ? onClickDelete : () => {}}>
          <Trash color="#903d3c" />
        </IconButton>
      </StyledListCard.DeleteContainer>
    </RoundedFlexContainer>
  );
};
