import { FC } from "react";
import StyledListCard from ".";
import { RoundedFlexContainer } from "../RoundedFlexContainer";

interface ListCardProps {
  icon: JSX.Element;
  mainLabel: string;
  sublabel?: string;
  endLabel: string;
  endSublabel: string;
}

export const ListCard: FC<ListCardProps> = ({
  icon,
  mainLabel,
  sublabel,
  endLabel,
  endSublabel,
}) => {
  return (
    <RoundedFlexContainer align="center">
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
    </RoundedFlexContainer>
  );
};
