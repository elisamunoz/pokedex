import styled from 'styled-components';

export const PokemonSearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  background: #DC0A2D;
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
  color: #fff;
  padding: 16px;
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
`

export const SearchBar = styled.input`
  min-height: 25px;
  border-radius: 16px;
  border: none;
  box-shadow: 0px 1px 3px 1px rgba(0,0,0,0.2);
  padding: 0px 12px;
  width: 100%;
  margin: 12px 0 0;
`

