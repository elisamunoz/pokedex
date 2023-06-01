import React from "react";
import { Button } from "./Button.styles";

interface Props {
  children?: JSX.Element;
  onClick: VoidFunction
  isVisible?: boolean,
  name: string
}

export const ButtonComponent = ({
  children,
  onClick,
  isVisible = false,
  name
}: Props) =>(
    <Button 
      onClick={onClick}
      isVisible={isVisible}
      name={name}
    >
      {children}
    </Button>
  )

export default ButtonComponent;
