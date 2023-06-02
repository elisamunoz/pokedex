import React from "react";
import { CONTENT_TYPES } from "../../layout/About";
import SvgIcon from "../Svg";
import { weightIcon, heightIcon  } from "../../../images/svgPaths"
import { Wrapper, UpperContent, Content, ContentType, MovesWrapper } from "./Measure.styles";

interface Props {
  content?: number | string[];
  contentType: CONTENT_TYPES;
}

const getFinalContent = (contentType: string, content: number | string[]) => {
  const finalContentNumber = typeof content === 'number' ? content / 10 : content

  if (contentType === CONTENT_TYPES.WEIGHT) {
    return `${finalContentNumber} kg`
  } else if (contentType === CONTENT_TYPES.HEIGHT) {
    return `${finalContentNumber} m`
  }
  return
}

export const MeasureComponent = ({
  content = 0,
  contentType,
}: Props) =>{

  const finalContent = getFinalContent(contentType, content)
  const svgIcon = contentType === CONTENT_TYPES.WEIGHT
    ? weightIcon
    : heightIcon


return (
    <Wrapper>
      <UpperContent>
        {contentType !== CONTENT_TYPES.MOVES &&
          <SvgIcon 
            size= {30} 
            color="#1D1D1D" 
            path={svgIcon.path}
            viewBox={svgIcon.viewBox}
          />
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
