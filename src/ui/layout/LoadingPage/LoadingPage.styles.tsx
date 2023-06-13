import styled from 'styled-components';
import { colors } from '../../../styles/constants';

export const LoadingPage = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  justify-content: center;
  background: ${colors.white};
`;

export const Image = styled.img`
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

