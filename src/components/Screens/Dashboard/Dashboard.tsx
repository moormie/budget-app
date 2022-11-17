import { FC } from "react";
import { Expenses } from "../../../types/Expenses";
import { HomeScreen } from "../Home/Home";
import { DetailsScreen } from "./../Details/Details";

interface Props {
  expensesList: Expenses[];
}

export const DashboardScreen: FC<Props> = ({ expensesList }) => {
  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 3fr",
          position: "absolute",
          right: 20,
          width: "calc(100% - 250px)",
        }}
      >
        <HomeScreen expensesList={expensesList} />
        <DetailsScreen onClickBack={() => {}} />
      </div>
    </>
  );
};
