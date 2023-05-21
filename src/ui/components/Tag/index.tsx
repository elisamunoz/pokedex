import React from "react";
import { Tag, Text } from "./Tag.styles";

interface Props {
  text: string,
  type?: string,
}

export const Header = ({
  text,
  type,
}: Props) => {
  return (
    <Tag>
      <Text>
        {text}
      </Text>
    </Tag>
  )
};

export default Header;
