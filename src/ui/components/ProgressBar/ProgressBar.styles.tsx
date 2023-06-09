import styled from 'styled-components';
import { colors } from '../../../styles/constants';

interface StatType {
  value?: number | string;
}

export const StatBarWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 0 0.3em;
`;

export const StatBar = styled.progress<StatType>`
  flex-grow: 1;
  height: 0.5em;
  appearance: none;

  &::-webkit-progress-bar {
    border-radius: 10px;
    background: ${colors.offWhite};
    background: color-mix(in oklab, currentColor, ${colors.offWhite});
  }

  &::-webkit-progress-value {
    background: currentColor;
    border-radius: 10px;
  }
`;
