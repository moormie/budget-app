import { FC, useState, useEffect, cloneElement } from "react";

interface Props {
  children: JSX.Element;
  waitBeforeShow?: number;
  visible: boolean;
}

export const Delayed: FC<Props> = ({
  children,
  waitBeforeShow = 300,
  visible,
}) => {
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    if (visible) {
      setIsShown(visible);
    } else {
      const timer = setTimeout(() => {
        setIsShown(visible);
      }, waitBeforeShow);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [waitBeforeShow, visible]);

  return isShown ? cloneElement(children, { visible }) : <></>;
};
