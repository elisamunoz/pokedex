import React from "react";
import { Text } from "./Text.styles";

interface Props {
  text?: string;
}

export const TextComponent = ({
  text
}: Props) =>(
    <Text>
      {text}
    </Text>
  )

export default TextComponent;
