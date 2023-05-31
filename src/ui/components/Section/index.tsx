import React from "react";
import { Section, Title, Content } from "./Section.styles";

interface Props {
  title?: string;
  children: JSX.Element;
}

export const SectionComponent = ({
  title,
  children,
}: Props) =>(
    <Section>
      <Title>{title}</Title>
      <Content>{children}</Content>
    </Section>
  )

export default SectionComponent;
