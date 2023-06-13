import styled from 'styled-components';

export const Loading = styled.img`
  height: 100px;
  width: 100px;
  align-self: center;
  animation: rotation 8s infinite linear;

  @keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
`