import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Loading } from "../components/Loading";
import { DetailsScreen } from "../components/Screens/Details/Details";
import { useExpensesByCategories } from "../hooks/useExpensesByCategories";

const DetailsPage: FC = () => {
  const navigate = useNavigate();

  const { loading } = useExpensesByCategories();

  const onClickBack = () => {
    navigate("/");
  };

  return (
    <>
      {loading && <Loading />}
      <DetailsScreen onClickBack={onClickBack} />
    </>
  );
};

export default DetailsPage;
