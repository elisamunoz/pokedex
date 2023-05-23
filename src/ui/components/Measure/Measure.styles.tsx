import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-transform: capitalize;
  flex-grow: 1;
  border-right: 1px solid #E0E0E0;

  &:last-child {
    border-right: none;
  }
`

export const UpperContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export const Icon = styled.div`
  font-size: 1.5em;
`

export const MovesWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const Content = styled.h6`
align-self: center;
font-size: 1em;
margin: 0 4px;
`

export const ContentType = styled.h5`
display: flex;
justify-content: center;
margin: 0;
font-size: 0.8em;
color: #666666;
`