import styled from 'styled-components';
import { POKEMON_TYPES, POKEMON_TYPE_COLORS } from '../constants';

interface Props {
  type?: POKEMON_TYPES;
}

export const StyledBody = styled.main<Props>`
  display: flex;
  flex-direction: column;
  color: #1D1D1D;
  font-family: 'Poppins', sans-serif;
  background: currentColor;

  ${({ type = POKEMON_TYPES.NORMAL }) => {
    
    if(POKEMON_TYPE_COLORS[type]) {
      return `color: ${POKEMON_TYPE_COLORS[type]};`;
    }
  }}
`;
