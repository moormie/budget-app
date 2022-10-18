import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Settings } from "../../assets";
import { InputField } from "./InputField";

test("type of input field", async () => {
  const user = userEvent.setup();
  render(<InputField type="number" />);
  const input = screen.getByRole("spinbutton");
  await user.type(input, "test");
  expect(input).toHaveValue(null);
});

test("end adornment of input field", async () => {
  render(<InputField endAdornment={<Settings />} />);
  const input = screen.getByTestId("input-field");
  expect(input.childElementCount).toBe(2);
});

test("placeholder of input field", async () => {
  render(<InputField placeholder="Search" />);
  const input = screen.getByRole("textbox");
  expect(input).toHaveAttribute("placeholder", "Search");
});

test("typing in input field", async () => {
  const user = userEvent.setup();
  render(<InputField />);
  const input = screen.getByRole("textbox");
  await user.type(input, "23");
  expect(input).toHaveValue("23");
  expect(input).toHaveAttribute("type", "text");
});

test("set value of input field", async () => {
  const user = userEvent.setup();
  const setValueMock = jest.fn();
  render(<InputField setValue={setValueMock} />);
  const input = screen.getByRole("textbox");
  await user.type(input, "23");
  expect(setValueMock).toBeCalledTimes(2);
});

test("click on input field", async () => {
  const user = userEvent.setup();
  const onClickMock = jest.fn();
  render(<InputField onClick={onClickMock} />);
  const input = screen.getByRole("textbox");
  await user.click(input);
  expect(onClickMock).toBeCalledTimes(1);
});




