import React from "react";
import { StatBarWrapper, StatBar } from "./ProgressBar.styles";

interface Props {
  value?: number;
}

export const ProgressBarComponent = ({
  value,
}: Props) => (
    <StatBarWrapper>
      <StatBar max={200} value={value} />
    </StatBarWrapper>
  )
export default ProgressBarComponent;
