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

interface Props {}

export const Settings: FC<Props> = () => {
  const [selectedCurrency, setSelectedCurrency] = useState("€ EUR");
  const [selectedCategory, setSelectedCategory] = useState<Category>();
  const [categoryList, setCategoryList] = useState(Object.values(Category));

  const onDeleteCategory = () => {
    if (selectedCategory) {
      const updatedList = [...categoryList];
      updatedList.splice(updatedList.indexOf(selectedCategory), 1);
      setCategoryList(updatedList);
      setSelectedCategory(undefined);
    }
  };

  const onSave = () => {
    console.log(selectedCurrency);
    console.log(categoryList);
  };

  const onCancel = () => {
    setSelectedCurrency("€ EUR")
    setCategoryList(Object.values(Category));
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
              colorPrimary={getColorOfCategory(category).primary}
              colorSecondary={getColorOfCategory(category).secondary}
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
          <IconButton onClick={() => {}}>
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
    </>
  );
};
