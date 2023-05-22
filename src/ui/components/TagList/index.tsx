import React from "react";
import { POKEMON_TYPES } from "../../../constants";
import { Wrapper, Tag, Text } from "./Tag.styles";

interface Props {
  types?: POKEMON_TYPES[],
}

export const TagComponent = ({
  types = []
}: Props) => {
  return (
    <Wrapper>
      {types.map(tp => (
        <Tag 
          key={tp}
          type={tp}
        >
          <Text>
            {tp}
          </Text>
      </Tag>
      ))}
      
    </Wrapper>
  )
};

export default TagComponent;
