import styled from 'styled-components';

export const Body = styled.div`
  background: #FFFFFF;
  box-shadow: inset 0px 1px 3px 1px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  margin: 8px;
  padding: 0;
  flex-grow: 1;
  max-width: 1000px;
  
  @media only screen and (min-width: 992px) {
    margin: 8px auto;
    width: 100%;
  }
`