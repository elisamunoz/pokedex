import React from "react";
import { Button } from "./Button.styles";

interface Props {
  children?: JSX.Element;
  onClick: VoidFunction
  isVisible?: boolean
}

export const ButtonComponent = ({
  children,
  onClick,
  isVisible = false
}: Props) =>(
    <Button 
      onClick={onClick}
      isVisible={isVisible}
    >
      {children}
    </Button>
  )

export default ButtonComponent;
