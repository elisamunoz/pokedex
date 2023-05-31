import styled from 'styled-components';

export const  ContentWrapper= styled.div`
  display: flex;
  flex-direction: column;
  margin: 8px;
`;

export const BackIcon = styled.img`
  width: 48px;
  height: 48px;
  fill: red;
`

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  color: #FFFFFF;
  font-size: 20px;
`

export const Title = styled.h4`
  text-transform: capitalize;
  margin: 0;
  /* display: flex;
  flex-direction: row; */
`

export const Number = styled.h5`
  font-size: 12px;
  margin: 0;
  /* margin: 8px;
  text-align: left; */
`

export const Image = styled.img`
  margin: auto;
  height: 200px;
  width: 200px;
  /* margin: 8px;
  text-align: left; */
`