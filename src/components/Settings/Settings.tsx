import { FC, useEffect, useState } from "react";
import StyledSettings from ".";
import { Add, Trash } from "../../assets";
import { IconButton } from "../IconButton/IconButton";
import { myTheme } from "../../theme/theme";
import { Select } from "../Select/Select";
import { Button } from "../Button/Button";
import { Delayed } from "../Delayed/Delayed";
import { Alert } from "../Alert/Alert";
import { AddModal } from "../AddModal/AddModal";
import { Category } from "../../types/Category";
import { useAppSelector } from "../../app/hooks";
import { Loading } from "../Loading";

interface Props {}

export const Settings: FC<Props> = () => {
  const { categoryList: dataList, loading } = useAppSelector(
    (state) => state.category
  );

  const [isAddNewOpen, setIsAddNewOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState("€ EUR");
  const [selectedCategory, setSelectedCategory] = useState<Category>();
  const [categoryList, setCategoryList] = useState<Category[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    setCategoryList(dataList);
  }, [dataList]);

  const onDeleteCategory = () => {
    if (selectedCategory) {
      const updatedList = [...categoryList];
      updatedList.splice(updatedList.indexOf(selectedCategory), 1);
      setCategoryList(updatedList);
      setSelectedCategory(undefined);
    }
  };

  const onAddCategory = (
    category: string,
    primary: string,
    secondary?: string
  ) => {
    if (categoryList.find((c) => c.name === category)) {
      setError("Category already exists");
    } else {
      const updatedList = [...categoryList];
      updatedList.push({ name: category, color: { primary, secondary } });
      setCategoryList(updatedList);
      setIsAddNewOpen(false);
      setError("");
    }
  };

  const onSave = () => {
    console.log(selectedCurrency);
    console.log(categoryList);
  };

  const onCancel = () => {
    setSelectedCurrency("€ EUR");
    setCategoryList(dataList);
  };

  const onCancelAdd = () => {
    setIsAddNewOpen(false);
    setError("");
  };

  return (
    <>
      {loading && <Loading />}
      <StyledSettings.Container>
        <StyledSettings.Title>
          <h3>Settings</h3>
        </StyledSettings.Title>
        <h4>Currency</h4>
        <Select
          value={selectedCurrency}
          setValue={setSelectedCurrency}
          options={["€ EUR", "$ USD", "£ GBP"]}
        />
        <StyledSettings.Line />
        <h4>Category</h4>
        {categoryList.map((category) => (
          <StyledSettings.Item key={category.name}>
            <StyledSettings.Tag
              colorPrimary={category.color.primary}
              colorSecondary={category.color.secondary}
            />
            <div style={{ flexGrow: 1 }}>{category.name}</div>
            <div>
              <IconButton onClick={() => setSelectedCategory(category)}>
                <Trash color={myTheme.colors.dark.red} />
              </IconButton>
            </div>
          </StyledSettings.Item>
        ))}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <IconButton onClick={() => setIsAddNewOpen(true)}>
            <Add color={myTheme.colors.dark.green} />
          </IconButton>
        </div>
        <StyledSettings.Line />
        <StyledSettings.ButtonContainer>
          <Button label="Cancel" onClick={onCancel} />
          <Button
            variant="success"
            label="Save"
            onClick={onSave}
            disabled={categoryList.length === 0}
          />
        </StyledSettings.ButtonContainer>
      </StyledSettings.Container>
      <Delayed visible={selectedCategory !== undefined}>
        <Alert
          message={`Delete category ${selectedCategory?.name}`}
          onClose={() => setSelectedCategory(undefined)}
          onSubmit={onDeleteCategory}
        />
      </Delayed>
      <Delayed visible={isAddNewOpen}>
        <AddModal
          onClose={onCancelAdd}
          onSubmit={onAddCategory}
          errorMessage={error}
        />
      </Delayed>
    </>
  );
};
