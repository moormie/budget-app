import { FC } from "react";

interface Props {
  width?: string;
  height?: string;
  color?: string;
}

export const CaretUp: FC<Props> = ({
  width = "20",
  height = "20",
  color = "black",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill={color}
      className="bi bi-caret-up-fill"
      viewBox="0 0 16 16"
    >
      <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
    </svg>
  );
};
