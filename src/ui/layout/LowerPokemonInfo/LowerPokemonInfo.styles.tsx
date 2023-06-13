import styled from 'styled-components';
import Loading from '../../components/Loading';
import { colors } from '../../../styles/constants';

export const  ContentWrapper= styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  background: ${colors.white};
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

export const LoadingStyled = styled(Loading)`
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto 0;
`