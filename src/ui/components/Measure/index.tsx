import React from "react";
import { Wrapper, UpperContent, Icon, Content, ContentType, MovesWrapper } from "./Measure.styles";
import { CONTENT_TYPES } from "../../layout/About";

interface Props {
  content?: number | string[];
  contentType: CONTENT_TYPES;
}

const getFinalContent = (contentType: string, content: number | string[]) => {
  const finalContentNumber = typeof content === 'number' ? content / 10 : content

  if (contentType === CONTENT_TYPES.WEIGHT) {
    return `${finalContentNumber} kg`
  } else if (contentType === CONTENT_TYPES.WEIGHT) {
    return `${finalContentNumber} m`
  }
  return
}

export const MeasureComponent = ({
  content = 0,
  contentType,
}: Props) =>{

  const finalContent = getFinalContent(contentType, content)
  

return (
    <Wrapper>
      <UpperContent>
        {contentType !== CONTENT_TYPES.MOVES &&
          <Icon>🐀</Icon>
        }
        {typeof content !== 'number'
        ? <MovesWrapper>{content.map(move => <Content key={move}>{move}</Content>)}</MovesWrapper>
        : <Content>{finalContent}</Content>
      }
        
      </UpperContent>
      <ContentType>{contentType}</ContentType>
    </Wrapper>
  )
}

export default MeasureComponent;
