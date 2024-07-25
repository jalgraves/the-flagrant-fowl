import React from "react"
import { StyledHero } from "./styles.js"

export const HeroHeader = (props) => {
  return (
    <StyledHero aria-details="Hero header" $background={props.background}>
      <h1>jalgraves</h1>
      <h2>&#40; Jonathan Arthur-Louis Graves &#41;</h2>
    </StyledHero>
  )
}
