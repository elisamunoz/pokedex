import styled from 'styled-components';
import { POKEMON_TYPES, POKEMON_TYPE_COLORS } from '../../../constants';

interface TitleProps {
  type?: POKEMON_TYPES;
}

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100%;
  max-width: 95%;
  margin: auto;
`;

export const Title = styled.h4<TitleProps>`
  font-weight: 700;

  ${({ type = '' }) => {

    if(POKEMON_TYPE_COLORS[type]) {
      return `color: ${POKEMON_TYPE_COLORS[type]};`;
    }
  }}
`;

export const Content = styled.div`
`
