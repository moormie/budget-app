import { FC, ReactNode } from "react";
import StyledListCard from ".";

interface ListCardProps {
  icon: ReactNode;
  mainLabel: string;
  endLabel: string;
  endSublabel: string;
}

export const ListCard: FC<ListCardProps> = ({
  icon,
  mainLabel,
  endLabel,
  endSublabel,
}) => {
  return (
    <StyledListCard.Container>
      <StyledListCard.IconContainer>{icon}</StyledListCard.IconContainer>
      <StyledListCard.TitleContainer>{mainLabel}</StyledListCard.TitleContainer>
      <StyledListCard.EndContainer>
        <div>{endLabel}</div>
        <StyledListCard.SubText>{endSublabel}</StyledListCard.SubText>
      </StyledListCard.EndContainer>
    </StyledListCard.Container>
  );
};
