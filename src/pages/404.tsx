import * as React from "react"
import { Link, HeadFC, PageProps } from "gatsby"
import { PageStyles, MainText, HeadingStyles, ParagraphStyles, Image } from "../styles/404.styles"
import rocketTeam from "../images/rocketTeam.png"

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <PageStyles>
      <MainText>
        <Image src={rocketTeam} alt="Rocket Team Image" />
        <HeadingStyles>404</HeadingStyles>
      </MainText>
      <ParagraphStyles>
        Page Not Found
      </ParagraphStyles>
      <Link to="/">Go to main page</Link>
    </PageStyles>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found</title>
