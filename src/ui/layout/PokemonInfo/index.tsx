import React from "react";
import Section from "../../components/Section";
import About from "../../layout/About";
import BaseStats from "../BaseStats";
import { ContentWrapper } from "./PokemonInfo.styles"

interface Props {
 
}

export const PokemonInfoSection = ({

}: Props) => {

  return (
    <Section>
      <ContentWrapper>
        <About />
        <BaseStats />
      </ContentWrapper>
    </Section>
  )
};

export default PokemonInfoSection;
