import React from "react";
import { Section, Title, Content } from "./Section.styles";
import { POKEMON_TYPES } from '../../../constants';

interface Props {
  title: string;
  children: JSX.Element;
  mainType?: POKEMON_TYPES;
}

export const SectionComponent = ({
  title,
  children,
  mainType,
}: Props) =>(
    <Section>
      <Title type={mainType}>{title}</Title>
      <Content>{children}</Content>
    </Section>
  )

export default SectionComponent;
