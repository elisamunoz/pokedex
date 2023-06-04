import styled from 'styled-components';

export const  ContentWrapper= styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #FFFFFF;
  box-shadow: inset 0px 1px 3px 1px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  margin: 8px;
  padding: 56px 20px 20px;
  min-height: 400px;

  @media only screen and (min-width: 600px) {
    margin: 8px auto;
    max-width: 500px;
  }
`;

export const MeasureWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

export const DescriptionWrapper = styled.div`
  margin: 8px;
  text-align: left;
`