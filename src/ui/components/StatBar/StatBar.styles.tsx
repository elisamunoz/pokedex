import styled from 'styled-components';

interface StatType {
  value?: number;
}

export const StatBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 450px;
  margin: 0 0.3em;
`;

export const StatBar = styled.progress<StatType>`
  width: 100%;
  height: 100%;
  margin: 0.5em 0;
  appearance: none;

  &::-webkit-progress-bar {
    border-radius: 10px;
    background-color: #f2f2f2;
  }

  &::-webkit-progress-value {
    background-color: #4caf50;
    border-radius: 10px;
  }

  // dolar{({ value = '' }) => {

  //   if(value) {
  //     return comilla rara background: red;comilla;
  //   }
  // }}
`;
