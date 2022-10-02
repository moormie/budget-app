import { FC, useState, useEffect, cloneElement } from "react";

interface Props {
  children: JSX.Element;
  waitBeforeShow?: number;
  open: boolean;
}

export const Delayed: FC<Props> = ({
  children,
  waitBeforeShow = 300,
  open,
}) => {
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    if (open) {
      setIsShown(open);
    } else {
      const timer = setTimeout(() => {
        setIsShown(open);
      }, waitBeforeShow);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [waitBeforeShow, open]);

  return isShown ? cloneElement(children, { visible: open }) : <></>;
};
