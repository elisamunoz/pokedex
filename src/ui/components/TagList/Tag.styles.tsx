import styled from 'styled-components';
import { POKEMON_TYPES, POKEMON_TYPE_COLORS } from '../../../constants';

interface TagProps {
  type?: POKEMON_TYPES;
}

export const Wrapper = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-inline-start: 0;
`

export const Tag = styled.li<TagProps>`
  display: flex;
  justify-content: center;
  margin: 0 8px;
  padding: 0.2em 0.8em;
  height: 1.5em;
  width: 4em;
  font-size: 0.8em;
  border-radius: 1.2em;

  ${({ type = '' }) => {

    if(!!POKEMON_TYPE_COLORS[type]) {
      return `background: ${POKEMON_TYPE_COLORS[type]};`;
    }
  }}
`;

export const Text = styled.h4`
  align-self: center;
  text-transform: capitalize;
  font-weight: 700;
  line-height: 16px;
  color: #FFFFFF;
`;
