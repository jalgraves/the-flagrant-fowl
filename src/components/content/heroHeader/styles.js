import styled from 'styled-components'
import { config } from '../../../utils/index.js'
const COLORS = config.colors
const FONTS = config.fonts

export const StyledHero = styled.div`
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  background: ${props => props.$background || "inherit"};
  border-bottom: 1px solid ${COLORS.black};
  display: flex;
  flex-flow: column wrap;
  margin: 5rem auto 0 auto;
  padding: 10rem 0;
  width: 100%;
  h1 {
    color: ${props => props.h1Color || COLORS.white};
    font-family: ${FONTS.gothamUltra};
    font-size: 3.25rem;
    letter-spacing: .2em;
    line-height: 150%;
    margin: auto;
    max-width: 80%;
    padding: 1rem 0;
    text-shadow: 1px 1px 4px #000000;
    text-transform: uppercase;
  }
  h2 {
    color: ${props => props.h2Color || COLORS.white};
    font-family: ${FONTS.gothamUltra};
    font-size: 2.5rem;
    font-weight: 900;
    letter-spacing: .2em;
    line-height: 100%;
    margin: auto;
    max-width: 80%;
    padding: .5rem 0;
    text-shadow: 1px 1px 4px #000000;
    text-transform: uppercase;
  }
  img {
    margin: .5rem auto;
    max-width: 60%;
  }
  @media (min-width: 320px)
  and (max-width: 768px)
  and (orientation: portrait)
  and (-webkit-min-device-pixel-ratio: 2) {
    h1 {
      font-size: 2rem;
    }
    h2 {
      font-size: 1.25rem;
    }
  }
`
