import styled from 'styled-components';
import { Link } from "gatsby"

export const PageStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  color: #571a17;
  font-family: -apple-system, Roboto, sans-serif, serif;
  background: #DC0A2D;
  text-align: center;
`

export const MainText = styled.div`
  position: relative;
`

export const HeadingStyles = styled.h1`
  margin: 0;
  max-width: 320;
  font-size: 200px;
`

export const ParagraphStyles = styled.p`
  margin: 20px 0;
  font-size: 35px;
`

export const Image = styled.img`
  position: absolute;
  max-width: -webkit-fill-available;
  bottom: -33px;
  right: 50%;
  transform: translate(50%);
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #571a17;
`