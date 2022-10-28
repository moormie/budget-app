import { FC, useState } from "react";
import StyledSettings from ".";
import { Add, Trash } from "../../assets";
import { Category } from "../../types/Category";
import { IconButton } from "../IconButton/IconButton";
import { myTheme } from "../../theme/theme";
import getColorOfCategory from "../../helpers/getColorOfCategory";
import { Select } from "../Select/Select";
import { Button } from "../Button/Button";
import { Delayed } from "../Delayed/Delayed";
import { Alert } from "../Alert/Alert";
import { AddModal } from "../AddModal/AddModal";

interface Props {}

export const Settings: FC<Props> = () => {
  const [isAddNewOpen, setIsAddNewOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState("€ EUR");
  const [selectedCategory, setSelectedCategory] = useState<string>();
  const [categoryList, setCategoryList] = useState<string[]>(
    Object.values(Category)
  );
  const [error, setError] = useState("");

  const onDeleteCategory = () => {
    if (selectedCategory) {
      const updatedList = [...categoryList];
      updatedList.splice(updatedList.indexOf(selectedCategory), 1);
      setCategoryList(updatedList);
      setSelectedCategory(undefined);
    }
  };

  const onAddCategory = (category: string) => {
    if (categoryList.includes(category)) {
      setError("Category already exists");
    } else {
      const updatedList = [...categoryList];
      updatedList.push(category);
      setCategoryList(updatedList);
      setIsAddNewOpen(false);
      setError("")
    }
  };

  const onSave = () => {
    console.log(selectedCurrency);
    console.log(categoryList);
  };

  const onCancel = () => {
    setSelectedCurrency("€ EUR");
    setCategoryList(Object.values(Category));
  };
  
  const onCancelAdd = () => {
    setIsAddNewOpen(false);
    setError("");
  }

  return (
    <>
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
          <StyledSettings.Item key={category}>
            <StyledSettings.Tag
              colorPrimary={getColorOfCategory(category as Category).primary}
              colorSecondary={
                getColorOfCategory(category as Category).secondary
              }
            />
            <div style={{ flexGrow: 1 }}>{category}</div>
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
          message={`Delete category ${selectedCategory}`}
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
