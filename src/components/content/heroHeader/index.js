import React from "react"
import { StyledHero } from "./styles.js"

export const HeroHeader = (props) => {
  return (
    <StyledHero aria-details="Hero header" $background={props.background}>
      <img src="/images/logos/2x/logo-black-red@2x.png" alt="The Flagrant Fowl" />
      <h2>Coming October 2024!</h2>
    </StyledHero>
  )
}
