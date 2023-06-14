import React from "react";
import { Button } from "./Button.styles";

interface Props {
  children?: JSX.Element;
  onClick?: VoidFunction;
  isVisible?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
  title: string
}

export const ButtonComponent = ({
  children,
  onClick,
  isVisible = false,
  type = "button",
  title
}: Props) =>(
    <Button 
      onClick={onClick}
      isVisible={isVisible}
      type={type}
      title={title}
    >
      {children}
    </Button>
  )

export default ButtonComponent;
