import React from "react";
import { Body } from "./Body.styles";

interface Props {
  children?: JSX.Element;
}

export const BodyComponent = ({
  children,
}: Props) =>(
    <Body>
      {children}
    </Body>
  )

export default BodyComponent;
