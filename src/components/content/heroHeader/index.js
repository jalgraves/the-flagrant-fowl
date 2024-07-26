import React from "react"
import { StyledHero } from "./styles.js"

export const HeroHeader = (props) => {
  return (
    <StyledHero aria-details="Hero header" $background={props.background} h2Color="#fbfb0e">
      <img src="/images/logos/2x/logo-black-red@2x.png" alt="The Flagrant Fowl" />
      <h1>Food &amp; Drink</h1>
      <h2>Coming Fall 2024!</h2>
    </StyledHero>
  )
}
