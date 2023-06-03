import styled from 'styled-components';

export const ThumbnailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
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
  z-index: 1;
`

export const Image = styled.img`
  height: 60%;
  margin: auto;
  z-index: 1;
`

export const Background = styled.div`
  position: absolute;
  background: #f3f2f2;
  border-radius: 7px;
  height: 40%;
  bottom: 0;
  right: 0;
  left: 0;
`
