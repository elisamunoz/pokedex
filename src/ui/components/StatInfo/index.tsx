import React from "react";
import ProgressBar from "../ProgressBar";
import { StatsWrapper, Types, StatNumber } from "./StatInfo.styles";
import { STAT_TYPES_2 } from "../../../constants";
import { addZerosToStart } from "../../../functions/utils"

interface Props {
  label: string;
  value?: number;
}

export const StatInfoComponent = ({
  label = '',
  value = 0,
}: Props) => {
  const valueWithZeros = addZerosToStart(value)
  const labelType = STAT_TYPES_2[label] || label
  return (
    <StatsWrapper>
      <Types>
        {labelType}
      </Types>
      <StatNumber>
        {valueWithZeros} 
      </StatNumber>
      <ProgressBar value={value} />
    </StatsWrapper>
  )
}
export default StatInfoComponent;
