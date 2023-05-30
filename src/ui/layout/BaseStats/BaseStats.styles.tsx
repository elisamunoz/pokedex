import styled from 'styled-components';

export const  ContentWrapper= styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  margin: 0.3 auto;
`;

export const TypesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-right: 1px solid #E0E0E0;

  &:last-child {
    border-right: none;
  }
`

export const Types = styled.div`
  text-align: right;
  /* margin-right: 8px; */
  margin-right: 0.5em;
`
export const StatNumberWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const StatNumber = styled.div`
  margin: 0 0.5em;
  text-align: left;
`

export const StatBar = styled.div`
`
