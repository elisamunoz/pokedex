import styled from 'styled-components';
import SvgIcon from '../../components/Svg';
import { colors } from '../../../styles/constants';

interface PokemonsOrder {
  isAscendent?: boolean;
}

export const PokemonSearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  background: ${colors.primaryColor};
`;

export const ThumbnailsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  justify-content: space-between;
  height: 100%;
`

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  font-size: 24px;
  font-weight: 700;
  color: ${colors.white};
  padding: 16px;

  @media only screen and (min-width: 992px) {
    margin: auto;
    width: 100%;
    padding: 16px 0;
    max-width: 1000px;
  }
`

export const UpperContent = styled.div`
  display: flex;
  flex-direction: row;
`

export const Title = styled.div`
  align-self: center;
  padding-left: 16px;
`
export const SearchBarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 400px;
  margin-top: 12px;
`
export const SearchBar = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  width: 100%;
`

export const SearchInput = styled.input`
  height: 30px;
  border-radius: 16px;
  border: none;
  box-shadow: 0px 1px 3px 1px ${colors.inputBoxShadow};
  padding: 0px 25px;
  width: 100%;
`
const Svg = styled(SvgIcon)`
  position: absolute;
  top: 6px;
`

export const SvgSearch = styled(Svg)`
  left: 5px;
`

export const SvgReset = styled(Svg)`
  right: 5px;
  cursor: pointer;
  
`
const SortBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  box-shadow: 0px 1px 3px 1px ${colors.inputBoxShadow};
  background: ${colors.white};
  box-sizing: border-box;
  padding: 5px;
`

export const SortByType = styled(SortBtn)`
  margin: 0 8px;
`

export const SortButton = styled(SortBtn)<PokemonsOrder>`
  transform: ${props => props.isAscendent ? "scaleY(-1)" : "scaleY(1)"};
`

