import styled from 'styled-components';
import { POKEMON_TYPES, POKEMON_TYPE_COLORS } from '../constants';
import { colors } from './constants';

interface Props {
  type?: POKEMON_TYPES;
}

export const StyledBody = styled.main<Props>`
  display: flex;
  flex-direction: column;
  color: ${colors.primaryFontColor};
  font-family: 'Poppins', sans-serif;
  background: currentColor;
  min-height: 100vh;

  ${({ type = POKEMON_TYPES.NORMAL }) => {
    
    if(POKEMON_TYPE_COLORS[type]) {
      return `color: ${POKEMON_TYPE_COLORS[type]};`;
    }
  }}
`;

export const PokemonCard = styled.div`
  
`
