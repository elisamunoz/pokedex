import * as React from "react"
import { HeadFC } from "gatsby"
import Button from "../ui/components/Button"
import { PageStyles, MainText, HeadingStyles, ParagraphStyles, ImageContainer, StyledLink } from "../styles/404.styles";
import rocketTeamImg from "../images/rocketTeam.png" 

interface Props {
  image?: string;
}

const NotFoundPage: React.FC<Props> = ({
  image = rocketTeamImg
}) => {
  return (
    <PageStyles>
    <MainText>
    <ImageContainer src={image} alt="Rocket Team Image" />
    <HeadingStyles>404</HeadingStyles>
    </MainText>
    <ParagraphStyles>
      Page Not Found
    </ParagraphStyles>
    <Button isVisible={true} name="Go to main page">
      <StyledLink to="/">Go to main page</StyledLink>
    </Button>
  </PageStyles>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found</title>
