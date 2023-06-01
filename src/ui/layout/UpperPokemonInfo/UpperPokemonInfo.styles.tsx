import styled from 'styled-components';

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 8px;
`;

export const PokeballWrapper = styled.div`
  position: absolute;
  top: -25px;
  right: -18px;
  z-index: 10;
  pointer-events: none;
  opacity: 0.2;
`

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 0;
  color: #FFFFFF;
  font-size: 30px;
`

export const Text = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-grow: 1;
  padding-left: 8px;
  z-index: 30;
`

export const Title = styled.h4`
  align-self: center;
  text-transform: capitalize;
  margin: 0;
`

export const Number = styled.h5`
  align-self: baseline;
  font-size: 0.5em;
  margin: 0;
`

export const Image = styled.img`
  margin: 0 auto -80px auto;
  height: 200px;
  width: 200px;
  z-index: 10;
`

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`