import React from "react";
import { StatBarWrapper, StatBar } from "./StatBar.styles";
import { pokemonStat } from "../../../types/pokemon";

interface Props {
  statsValue?: pokemonStat[];
}

export const StatBarComponent = ({
  statsValue = [],
}: Props) => {


  return (
    <StatBarWrapper>
      {statsValue.map(statValue => 
        <StatBar
          key={statValue.name}
          max={200}
          value={statValue.value}
        />
      )}
    </StatBarWrapper>
  )
}
export default StatBarComponent;
