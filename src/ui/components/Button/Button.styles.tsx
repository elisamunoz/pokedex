import styled from 'styled-components';

interface ButtonTypes {
  isVisible: boolean;
}

export const Button = styled.button<ButtonTypes>`
  border: none;
  padding: 0;
  background-color: ${props => props.isVisible ? "currentColor" : "transparent"}
`