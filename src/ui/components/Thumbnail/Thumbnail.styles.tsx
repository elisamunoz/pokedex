import styled from 'styled-components';

export const ThumbnailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  width: 30.3%;
  aspect-ratio: 1 / 1;
  padding: 3px;
  font-size: 13px;
  font-weight: 700;
  margin: 3px 0;
  overflow: hidden;
  color: #1D1D1D;
`

export const Number = styled.div`
  text-align: right;
  padding-right: 10px;
  font-size: 10px;
`

export const Name = styled.div`
  padding-left: 10px;
  text-transform: capitalize;
`

export const Image = styled.img`
  height: 60%;
  margin: auto;
  /* padding: 16px; */
`
