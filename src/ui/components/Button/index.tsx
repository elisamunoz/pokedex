import React from "react";
import { Button } from "./Button.styles";

interface Props {
  children?: JSX.Element;
  onClick: VoidFunction;
  isVisible?: boolean;
  name: string;
  type?: "button" | "submit" | "reset" | undefined
}

export const ButtonComponent = ({
  children,
  onClick,
  isVisible = false,
  name,
  type = "button"
}: Props) =>(
    <Button 
      onClick={onClick}
      isVisible={isVisible}
      name={name}
      type={type}
    >
      {children}
    </Button>
  )

export default ButtonComponent;
