import styled from 'styled-components';
import { colors } from '../../../styles/constants';

export const StatsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
`

export const Types = styled.div`
  width: 85px;
  text-align: right;
  font-weight: 700;
  padding-right: 0.5em;
  border-right: 1px solid ${colors.borderColor};
  color: currentColor;
`
export const StatNumber = styled.div`
  width: 60px;
  text-align: left;
  margin-left: 0.5em;
  color: ${colors.primaryFontColor};
`
